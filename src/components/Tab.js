import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Tab(props) {
  const title = props.title
  return (
     <View style={styles.container}>
      <Text>{title}</Text>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
