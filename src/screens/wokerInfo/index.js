// WorkerInfo.js
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useRoute } from "@react-navigation/native";

import ProfileImage from "../../components/profile/ProfileImage";
import Name from "../../components/profile/Name";
import LocationAndDistance from "../../components/profile/LocationAndDistance";
import CommunalPanel from "../../components/profile/CommunalPanel";

import careWorkers from "../../../assets/data/feed";

const WorkerInfoScreen = (props) => {
  const [activeTab, setActiveTab] = useState("About");
  const route = useRoute();
  const worker = careWorkers.find(
    (worker) => worker.id === route.params.postId
  );
  return (
    <View style={styles.container}>
      {/* main info panel */}
      <ProfileImage imageUrl={worker.image} />

      <Name name={worker.name} isRecommended={true} />
      <LocationAndDistance
        location={worker.location}
        distance="10 miles"
        experience={worker.experience}
        isAuthenticated={worker.isAuthenticated}
      />

      {/* About/Expertise panel */}
      <CommunalPanel
        worker={worker}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

export default WorkerInfoScreen;
