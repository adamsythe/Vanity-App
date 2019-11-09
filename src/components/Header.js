import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Avatar from './Avatar'

export default function Header({ goToProfile }) {
  return (
     <View style={styles.container}>
     	<Text>Adam</Text>
      <TouchableOpacity onPress={goToProfile}>
     	  <Avatar size={20}/>
      </TouchableOpacity>
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
