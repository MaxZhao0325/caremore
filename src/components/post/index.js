import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

const CareWorkerPost = (props) => {
  const post = props.post;
  return (
    <View style={styles.container}>
      {/* Care Worker Image */}
      <Image
        source={{
          uri: post.image,
        }}
        style={styles.profileImage}
      />

      {/* Care Worker Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{post.name}</Text>
        <View style={styles.infoItem}>
          <Icon name="location-arrow" size={12} style={styles.icon} />
          <Text style={styles.text}>{post.distance}</Text>
        </View>
        <Text style={styles.text}>{post.experience} experience</Text>
        <View style={styles.infoItem}>
          <Icon name="map-marker" size={12} style={styles.icon} />
          <Text style={styles.text}>{post.location}</Text>
        </View>
        <Text style={styles.text}>Hours worked: {post.hoursWorked}</Text>
        <Text style={styles.text}>Cost: {post.cost}</Text>
      </View>
    </View>
  );
};

export default CareWorkerPost;
