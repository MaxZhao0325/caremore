import React from "react";
import {
  View,
  TextInput,
  ScrollView,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
} from "react-native";
import styles from "./styles";
import Fontisto from "react-native-vector-icons/Fontisto";

import { useNavigation } from "@react-navigation/native";

import feed from "../../../assets/data/feed";
import Post from "../../components/post";

const HomeScreen = (props) => {
  const navigation = useNavigation();
  return (
    <View>
      {/* Search Bar */}
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate("Destination Search")}
      >
        <Fontisto name="search" size={25} color={"#f15454"} />
        <Text style={styles.searchButtonText}>Search Carers</Text>
      </Pressable>

      {/* Post List */}
      {/* <FlatList
        style={styles.postList}
        data={feed}
        renderItem={({ item }) => <Post post={item} />}
      /> */}
    </View>
  );
};

export default HomeScreen;
