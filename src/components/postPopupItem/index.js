import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

import { useNavigation } from "@react-navigation/native";

const PostPopupItem = (props) => {
  const navigation = useNavigation();
  const post = props.post;
  return (
    <View>
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate("Worker Info", { postId: post.id })}
      >
        <View style={styles.leftContainer}>
          {/* Care Worker Image */}
          <Image
            source={{
              uri: post.image,
            }}
            style={styles.profileImage}
          />

          {/* Star Rating */}
          <View style={styles.starRating}>
            {[...Array(5)].map((_, i) => (
              <Icon
                key={i}
                name={i < post.star ? "star" : "star-o"}
                size={12}
                color="#FFD700" // Gold color
              />
            ))}
          </View>
        </View>

        <View style={styles.rightContainer}>
          {/* Care Worker Info */}
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{post.name}</Text>
            <View style={styles.infoItem}>
              <Icon name="location-arrow" size={12} style={styles.icon} />
              <Text style={styles.text}>{post.distance}</Text>
            </View>
            <Text style={styles.text}>{post.experience} experience</Text>

            <Text style={styles.text}>Hours worked: {post.hoursWorked}</Text>
            <Text style={styles.text}>Cost: {post.cost}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default PostPopupItem;
