import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export function Error({ error }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  text: {
    color: 'red',
    //fontWeight: 'bold',
  },
});
