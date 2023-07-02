import React from 'react';
import {
  View,
  TextInput,
  ScrollView,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

const homesData = [
  {id: 1, name: 'Modern Apartment', location: 'New York'},
  {id: 2, name: 'Cozy Cottage', location: 'San Francisco'},
  {id: 3, name: 'Luxury Villa', location: 'Los Angeles'},
  // ... add more sample data
];

const HomeScreen = props => {
  return (
    <View>
      {/* Search Bar */}
      <Pressable
        style={styles.searchButton}
        onPress={() => console.warn('search btn clicked')}>
        <Fontisto name="search" size={25} color={'#f15454'} />
        <Text style={styles.searchButtonText}>Where are you going?</Text>
      </Pressable>

      {/* Homes List */}
      {/* <ScrollView style={styles.homesList}>
        {homesData.map(home => (
          <View key={home.id} style={styles.homeCard}>
            <Text style={styles.homeName}>{home.name}</Text>
            <Text style={styles.homeLocation}>{home.location}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
};

export default HomeScreen;
