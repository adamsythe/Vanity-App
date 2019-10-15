import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/components/Navigator'

export default function App() {
  return (
    <View style={styles.container}>
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
