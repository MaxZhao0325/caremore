import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
} from "react-native";

import feed from "../../../assets/data/feed";
import Post from "../../components/post";

const SearchResultsScreen = (props) => {
  return (
    <View>
      <FlatList data={feed} renderItem={({ item }) => <Post post={item} />} />
    </View>
  );
};

export default SearchResultsScreen;
