// CommunalPanel.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import AboutPanel from "./About";
import ExpertisePanel from "./Expertise";

import styles from "./styles";

const CommunalPanel = ({ worker, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        <TouchableOpacity onPress={() => setActiveTab("About")}>
          <Text style={activeTab === "About" ? styles.activeTab : styles.tab}>
            About
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab("Expertise")}>
          <Text
            style={activeTab === "Expertise" ? styles.activeTab : styles.tab}
          >
            Expertise
          </Text>
        </TouchableOpacity>
      </View>

      {activeTab === "About" ? (
        <View>
          <AboutPanel worker={worker} />
        </View>
      ) : (
        <View>
          <ExpertisePanel worker={worker} />
        </View>
      )}
    </View>
  );
};

export default CommunalPanel;
