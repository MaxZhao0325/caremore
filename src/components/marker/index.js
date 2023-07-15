import React from "react";
import { View, Image } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import styles from "./styles";
import { Marker } from "react-native-maps";

const MarkerView = ({ star, coordinate, image, onPress, isSelected }) => {
  const stars = [];

  // Create star icons based on the starCount prop
  for (let i = 0; i < star; i++) {
    stars.push(<MaterialIcons name="star" size={10} color="gold" key={i} />);
  }

  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <View
        style={styles.container}
        backgroundColor={isSelected ? "orange" : "white"}
      >
        <Image style={styles.profileImage} source={{ uri: image }} />
        <View style={styles.starContainer}>{stars}</View>
      </View>
    </Marker>
  );
};

export default MarkerView;
