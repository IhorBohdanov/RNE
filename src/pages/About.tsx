import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const About = () => (
  <View>
    <Text style={styles.header}>
      About Page
    </Text>

    <Text style={styles.secondaryText}>
      This app is developed in React Native
    </Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    fontWeight: '600',
    fontSize: 20,
    color: '#000',
    marginBottom: 20,
  },
  secondaryText: {
    fontWeight: '400',
    fontSize: 16,
    color: '#000',
  },
});

export default About;