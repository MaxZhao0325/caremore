import React, { useReducer, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
  TextInput,
  Pressable,
} from "react-native";

import Entypo from "react-native-vector-icons/Entypo";

import feed from "../../../assets/data/feed";
import Post from "../../components/post";
import searchResults from "../../../assets/data/search";

import styles from "./styles";

import { useNavigation } from "@react-navigation/native";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import SuggestionRow from "./suggestionRow";

const DestinationSearchScreen = (props) => {
  const navigation = useNavigation();
  const [inputText, setInputText] = useState("");
  return (
    <View style={styles.container}>
      {/* google place autocomplete */}
      <View style={{ height: 500 }}>
        <GooglePlacesAutocomplete
          placeholder="Enter your location"
          onPress={(data, details = null) => {
            console.log(data, details);
            // navigate to the search result page with the search data (location)
            navigation.navigate("Home", {
              screen: "Explore",
              params: { screen: "SearchResults" },
            });
          }}
          fetchDetails
          styles={{
            textInput: styles.textInput,
          }}
          query={{
            key: "AIzaSyAkpQPw-PJ-SrYCdcbIvQgs3hm51KvQhrs",
            language: "zh-CN",
          }}
          suppressDefaultStyles
          renderRow={(item) => <SuggestionRow item={item} />}
        />
      </View>

      {/* input component */}
      <TextInput
        style={styles.textInput}
        placeholder="Enter your location"
        value={inputText}
        onChangeText={setInputText}
      />

      {/* list of destinations */}
    </View>
  );
};

export default DestinationSearchScreen;
