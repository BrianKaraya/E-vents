import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, TextInput } from 'react-native';

export function Input({ style, ...props }) {
  /* render();
  {
    const styleInput = {
      backgroundColor: '#ccc',
      width: '100#',
      marginVertical: 20,
    };
  } */
  return <TextInput {...props} style={[styles, styles.input]} />;
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#ccc',
    width: '100#',
    marginVertical: 20,
    padding: 10,
    borderRadius: 8,
  },
});
