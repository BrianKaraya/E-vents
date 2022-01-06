import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export function CloseBtn({ name, style, onPress }) {
  return (
    <TouchableOpacity style={styles.clsBtn} onPress={onPress}>
      <Icon
        name={name}
        type="ionicon"
        size={30}
        color="#FF5733"
        onPress={onPress}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  clsBtn: {
    marginTop: 10,
    position: 'absolute',
    right: 20,
    //paddingBottom: 40,
  },
});
