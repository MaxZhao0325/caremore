import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home";
import SearchResultsScreen from "../screens/searchResults";

const Stack = createNativeStackNavigator();

const Router = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={HomeScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SearchResults"
        component={SearchResultsScreen}
        options={{ title: "Search Results" }}
      />
    </Stack.Navigator>
  );
};

export default Router;
