import React from "react";
import { View, Text, Image } from "react-native";

import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MarkerView from "../../components/marker";

import PostPopupItem from "../../components/postPopupItem";

import careWorkers from "../../../assets/data/feed";

import { useState } from "react";

const SearchResultsMap = (props) => {
  const [selectedWorkerId, setSelectedWorkerId] = useState(null);
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <MapView
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
        <PostPopupItem post={careWorkers[1]} />
      </View>
    </View>
  );
};

export default SearchResultsMap;
