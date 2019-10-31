import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Avatar from './Avatar'

export default function Header() {
  return (
     <View style={styles.container}>
     	<Text>Adam</Text>
     	<Avatar size={20}/>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.22,
    shadowRadius: 4,
  },
});
