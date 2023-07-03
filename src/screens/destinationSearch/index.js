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

const DestinationSearchScreen = (props) => {
  const navigation = useNavigation();
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
          <Pressable
            onPress={() => navigation.navigate("Home")}
            style={styles.row}
          >
            <View style={styles.iconContainer}>
              <Entypo name={"location-pin"} size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
