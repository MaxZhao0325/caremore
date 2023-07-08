import React from "react";
// import { createNativeStackNavigator } from "@react-navigation/stack";

import DestinationSearchScreen from "../screens/destinationSearch";
import HomeScreen from "../screens/home";
import SearchResultsScreen from "../screens/searchResults";
import WorkerInfoScreen from "../screens/wokerInfo";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeTabNavigator from "./homeTabNavigator";

import SearchResultsTabNavigator from "./searchResultsTabNavigator";
import ExploreNavigator from "./exploreNavigator";

const Stack = createNativeStackNavigator();

const Router = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeTabNavigator}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Destination Search"
        component={DestinationSearchScreen}
        options={{
          title: "Search results",
        }}
      />

      <Stack.Screen
        name="Search Result"
        component={ExploreNavigator}
        options={{
          title: "Search Result",
        }}
      />

      <Stack.Screen
        name="Worker Info"
        component={WorkerInfoScreen}
        options={{
          title: "Worker Info",
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
