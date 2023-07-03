// Name.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./styles";

const Name = ({ name, isRecommended }) => (
  <View style={styles.container}>
    <Text style={styles.name}>{name}</Text>
    {isRecommended && <Text style={styles.recommended}>Recommended</Text>}
  </View>
);

export default Name;
