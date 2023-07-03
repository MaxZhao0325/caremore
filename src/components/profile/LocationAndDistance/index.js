// LocationAndDistance.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./styles";

const LocationAndDistance = ({
  location,
  distance,
  experience,
  isAuthenticated,
}) => (
  <View style={styles.container}>
    <Text style={styles.location}>{location}</Text>
    <Text style={styles.details}>
      {distance} · {experience} ·{" "}
      {isAuthenticated ? "Verified" : "Not Verified"}
    </Text>
  </View>
);

export default LocationAndDistance;
