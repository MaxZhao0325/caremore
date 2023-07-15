import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home";

import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";
import EvilIcons from "react-native-vector-icons/EvilIcons";

import ExploreNavigator from "./exploreNavigator";
import SearchResultsMap from "../screens/searchResultsMap";

const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarActiveTintColor: "#f15454" }}
    >
      <Tab.Screen
        name={"Explore"}
        // component={ExploreNavigator}
        component={ExploreNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="search" size={25} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={"Favorite"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="heart" size={25} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={"Inbox"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="message-square" size={25} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={"Profile"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <EvilIcons name="user" size={37} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default HomeTabNavigator;
