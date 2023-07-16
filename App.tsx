/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// use newest version of google map
// import { enableLatestRenderer } from "react-native-maps";
// enableLatestRenderer();

import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { SafeAreaView, useColorScheme } from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";

import HomeScreen from "./src/screens/home";
import Router from "./src/navigation/router";
import DestinationSearchScreen from "./src/screens/destinationSearch";
import WorkerInfoScreen from "./src/screens/wokerInfo";

// aws amplify auth
import {
  withAuthenticator,
  useAuthenticator,
} from "@aws-amplify/ui-react-native";

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

export default withAuthenticator(App);
