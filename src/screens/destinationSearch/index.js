import React, { useReducer, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
  TextInput,
} from "react-native";

import Entypo from "react-native-vector-icons/Entypo";

import feed from "../../../assets/data/feed";
import Post from "../../components/post";
import searchResults from "../../../assets/data/search";

import styles from "./styles";

const DestinationSearchScreen = (props) => {
  const [inputText, setInputText] = useState("");
  return (
    <View style={styles.container}>
      {/* input component */}
      <TextInput
        style={styles.textInput}
        placeholder="Enter your home town"
        value={inputText}
        onChangeText={setInputText}
      />

      {/* list of destinations */}
      <FlatList
        data={searchResults}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name={"location-pin"} size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
