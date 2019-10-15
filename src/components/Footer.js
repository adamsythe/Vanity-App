import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tab from './Tab'

export default function Footer(props) {
  const screens = props.screens
  return (
     <View style={styles.container}>
     	<Tab title={screens[0]}/>
     	<Tab title={screens[1]}/>
     	<Tab title={screens[2]}/>
     	<Tab title={screens[3]}/>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: 'pink',
    flexDirection: 'row',
  },
});
