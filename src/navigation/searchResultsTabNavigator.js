import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import searchResults from "../screens/searchResults";

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = (props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={"list"} component={searchResults} />
      <Tab.Screen name={"map"} component={searchResults} />
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
