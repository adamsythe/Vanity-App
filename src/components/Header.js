import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
     <View style={styles.container}>
     	<Text>Adam</Text>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: 'pink',
  },
});
