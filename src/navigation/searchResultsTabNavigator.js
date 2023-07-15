import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import searchResults from "../screens/searchResults";
import searchResultsMap from "../screens/searchResultsMap";

const Tab = createMaterialTopTabNavigator();

// later we can make it a stack with map on top and search results at the bottom
const SearchResultsTabNavigator = (props) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#f15454",
        tabBarIndicatorStyle: { backgroundColor: "#f15454" },
      }}
    >
      <Tab.Screen name={"list"} component={searchResults} />
      <Tab.Screen name={"map"} component={searchResultsMap} />
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
