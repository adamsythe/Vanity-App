import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';

const MusicCard = ({ title, artist, url }) => {
  return (
    <TouchableOpacity onPress={() => Linking.openURL(url)}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.artist}>{artist}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderWidth: 1,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.22,
    shadowRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    marginBottom: 8,
  },
  artist: {
    fontSize: 12,
  },
});

export default MusicCard
