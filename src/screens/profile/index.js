import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
  Pressable,
} from "react-native";

import feed from "../../../assets/data/feed";
import Post from "../../components/post";

// aws amplify auth
import {
  withAuthenticator,
  useAuthenticator,
} from "@aws-amplify/ui-react-native";

import styles from "./styles";

// retrieves only the current value of 'user' from 'useAuthenticator'
const userSelector = (context) => [context.user];

const SignOutButton = () => {
  const { user, signOut } = useAuthenticator(userSelector);
  return (
    <Pressable onPress={signOut} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>
        Hello, {user.username}! Click here to sign out!
      </Text>
    </Pressable>
  );
};

const ProfileScreen = (props) => {
  return (
    <View>
      <SignOutButton />
    </View>
  );
};

export default ProfileScreen;
