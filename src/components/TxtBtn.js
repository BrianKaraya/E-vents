import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export function TxtBtn({ title, style, onPress }) {
  return (
    <TouchableOpacity style={styles.btn1} onPress={onPress}>
      <Text style={styles.btnTxt}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn1: {
    padding: 10,
    borderRadius: 8,
    textAlign: 'center',

    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTxt: {
    //fontWeight: 'normal',
    color: `#ff7f50`,
  },
});
