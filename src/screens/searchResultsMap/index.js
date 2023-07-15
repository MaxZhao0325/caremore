import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  useWindowDimensions,
} from "react-native";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MarkerView from "../../components/marker";

import PostPopupItem from "../../components/postPopupItem";

import careWorkers from "../../../assets/data/feed";

import { useState, useEffect, useRef } from "react";
import { debounce } from "lodash";

const SearchResultsMap = (props) => {
  const [selectedWorkerId, setSelectedWorkerId] = useState(null);
  //   const [isScrolling, setIsScrolling] = useState(false);
  const width = useWindowDimensions().width;
  const flatlist = useRef();
  const map = useRef();

  // Create a debounced function that will only invoke the setSelectedWorkerId after 300 milliseconds have passed
  const debouncedSetSelectedWorkerId = debounce(setSelectedWorkerId, 300);

  useEffect(() => {
    if (!selectedWorkerId || !flatlist) {
      return;
    }
    const index = careWorkers.findIndex(
      (worker) => worker.id === selectedWorkerId
    );
    flatlist.current.scrollToIndex({ index });

    const selectedWorker = careWorkers[index];
    const region = {
      latitude: selectedWorker.coordinate.latitude,
      longitude: selectedWorker.coordinate.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    };
    map.current.animateToRegion(region);
  }, [selectedWorkerId]);

  const viewConfig = useRef({ itemVisiblePercentThreshold: 70 });
  const onViewChanged = useRef(
    debounce(({ viewableItems }) => {
      if (viewableItems.length > 0) {
        const selectedWorker = viewableItems[0].item;
        debouncedSetSelectedWorkerId(selectedWorker.id);
      }
    }, 300)
  );

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <MapView
        ref={map}
        style={{ width: "100%", height: "100%" }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
      >
        {careWorkers.map((worker) => (
          <MarkerView
            key={worker.id}
            coordinate={worker.coordinate}
            star={worker.star}
            image={worker.image}
            isSelected={worker.id === selectedWorkerId}
            onPress={() => setSelectedWorkerId(worker.id)}
          />
        ))}
      </MapView>
      <View style={{ position: "absolute", bottom: 10 }}>
        <FlatList
          ref={flatlist}
          data={careWorkers}
          renderItem={({ item }) => <PostPopupItem post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};

export default SearchResultsMap;
