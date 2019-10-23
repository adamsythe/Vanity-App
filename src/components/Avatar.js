import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import adam from '../../assets/adam.jpg'

export default function Avatar(props) {
  const size = props.size
  return (
    <View>
    <Image
      style={{
        width: size,
        height: size,
        borderRadius: size / 2
      }}
      source={adam}
    />
    </View>
  );
}

const styles = StyleSheet.create({
});

