import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Avatar from './Avatar'
import { title, description } from '../data/AboutPageData'

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{title}</Text>
      <Avatar size={150} />
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 24,
    fontSize: 24,
    marginBottom: 48,
  },
  description: {
    textAlign: 'center',
  },
});

