import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./styles";

const AboutPanel = () => {
  return (
    <View style={styles.container}>
      <RatesPanel rate="20" />
      <MoreAboutMePanel
        languages="English, Spanish"
        hasDriverLicense={true}
        hoursWorked="2000"
      />
      <MyBioPanel bio="I am an experienced care worker passionate about helping others..." />
    </View>
  );
};

const RatesPanel = ({ rate }) => (
  <View style={styles.ratesContainer}>
    <Text style={styles.title}>Rates</Text>
    <Text style={styles.rate}>${rate} per hour</Text>
  </View>
);

const MoreAboutMePanel = ({ languages, hasDriverLicense, hoursWorked }) => (
  <View style={styles.moreAboutMeContainer}>
    <Text style={styles.title}>More About Me</Text>
    <Text>Languages: {languages}</Text>
    <Text>Driver License: {hasDriverLicense ? "Yes" : "No"}</Text>
    <Text>Hours Worked: {hoursWorked}</Text>
  </View>
);

const MyBioPanel = ({ bio }) => (
  <View style={styles.myBioContainer}>
    <Text style={styles.title}>My Bio</Text>
    <Text>{bio}</Text>
  </View>
);

export default AboutPanel;
