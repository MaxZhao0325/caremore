// WorkerInfo.js
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

import ProfileImage from "../../components/profile/ProfileImage";
import Name from "../../components/profile/Name";
import LocationAndDistance from "../../components/profile/LocationAndDistance";
// import CommunalPanel from "./CommunalPanel";

const WorkerInfoScreen = () => {
  const [activeTab, setActiveTab] = useState("About");

  return (
    <View style={styles.container}>
      {/* main info panel */}
      <ProfileImage
        imageUrl={
          "https://static-cdn.jtvnw.net/jtv_user_pictures/ebc00d2e-3be6-4530-8179-863459295698-profile_image-300x300.png"
        }
      />

      <Name name="Jane Doe" isRecommended={true} />
      <LocationAndDistance
        location="New York, Manhattan"
        distance="2.5 miles"
        experience="5 years"
        isAuthenticated={true}
      />

      {/* About/Expertise panel */}
      {/* <CommunalPanel activeTab={activeTab} setActiveTab={setActiveTab} /> */}
    </View>
  );
};

export default WorkerInfoScreen;
