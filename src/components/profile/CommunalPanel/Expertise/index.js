import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./styles";

const ExpertisePanel = () => {
  return (
    <View style={styles.container}>
      <MySkillsPanel skills={["Cooking", "Housekeeping", "Companionship"]} />
      <InterestsAndHobbiesPanel
        interests={["Gardening", "Reading", "Walking"]}
      />
      <QualificationsPanel
        qualifications={["Certified Caregiver", "CPR Certified"]}
      />
    </View>
  );
};

const MySkillsPanel = ({ skills }) => (
  <View style={styles.mySkillsContainer}>
    <Text style={styles.title}>My Skills</Text>
    {skills.map((skill) => (
      <Text key={skill}>{skill}</Text>
    ))}
  </View>
);

const InterestsAndHobbiesPanel = ({ interests }) => (
  <View style={styles.interestsAndHobbiesContainer}>
    <Text style={styles.title}>Interests & Hobbies</Text>
    {interests.map((interest) => (
      <Text key={interest}>{interest}</Text>
    ))}
  </View>
);

const QualificationsPanel = ({ qualifications }) => (
  <View style={styles.qualificationsContainer}>
    <Text style={styles.title}>Qualifications</Text>
    {qualifications.map((qualification) => (
      <Text key={qualification}>{qualification}</Text>
    ))}
  </View>
);

export default ExpertisePanel;
