import React from "react";
import {
  View,
  TextInput,
  ScrollView,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import styles from "./styles";
import Fontisto from "react-native-vector-icons/Fontisto";

const HomeScreen = (props) => {
  return (
    <View>
      {/* Search Bar */}
      <Pressable
        style={styles.searchButton}
        onPress={() => console.warn("search btn clicked")}
      >
        <Fontisto name="search" size={25} color={"#f15454"} />
        <Text style={styles.searchButtonText}>Where are you going?</Text>
      </Pressable>

      {/* Post List */}
    </View>
  );
};

export default HomeScreen;
