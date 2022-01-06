import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const FilledButton = ({ title, style, onPress }) => {
  return (
    <TouchableOpacity
      style={
        [styles.btn1, style]
        //  onPress={onPress}
      }
    >
      <Text style={styles.btnTxt}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn1: {
    backgroundColor: `#000080`,
    padding: 10,
    borderRadius: 8,
    textAlign: 'center',

    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTxt: {
    //fontWeight: 'normal',
    color: `#fff`,
    fontSize: 15,
  },
});
