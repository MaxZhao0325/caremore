/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";

import { SafeAreaView, useColorScheme } from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";

import HomeScreen from "./src/screens/home";
import SearchResultsScreen from "./src/screens/searchResults";
import DestinationSearchScreen from "./src/screens/destinationSearch";

import Post from "./src/components/post";
import feed from "./assets/data/feed";

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // const post1 = feed[0];
  // const post2 = feed[1];
  // const post3 = feed[2];

  return (
    <SafeAreaView style={backgroundStyle}>
      <DestinationSearchScreen />
    </SafeAreaView>
  );
}

export default App;
