import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity
} from 'react-native';

export default function Tab(
    { title, changeScreen, isSelected, index }
  ) {
  return (
     <TouchableOpacity
      style={styles.container}
      onPress={() => changeScreen(index)}
     >
       <View>
        <Text style={
          isSelected
            ? styles.selectedText : styles.unselectedText
        }>{title}</Text>
       </View>
     </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  selectedText: {
    color: 'blue',
  },
  unselectedText: {
    color: 'black',
  },
});
