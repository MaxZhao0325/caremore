// ProfileImage.js
import React from "react";
import { View, Image, StyleSheet } from "react-native";
import styles from "./styles";

const ProfileImage = ({ imageUrl }) => (
  <View style={styles.container}>
    <Image source={{ uri: imageUrl }} style={styles.image} />
  </View>
);

export default ProfileImage;
