import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

/* export default class IconLabel extends React.Component {
  render() { */
export default function IconLabel({ onPress }) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.labelStyleContainer}>
          <TouchableOpacity style={styles.btnStyle}>
            <Text style={styles.labelStyle}>Share</Text>
            <Icon
              name="share-social-sharp"
              type="ionicon"
              size={20}
              style={styles.iconStyle}
              //onPress={onPress}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.labelStyleContainer}>
          <TouchableOpacity style={styles.btnStyle}>
            <Text style={styles.labelStyle}>Reserve</Text>
            <Icon
              name="add-circle-sharp"
              type="ionicon"
              size={20}
              color="#FF5733"
              style={styles.iconStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const deviceWidth = Math.round(Dimensions.get('window').width);
const radius = 20;

const styles = StyleSheet.create({
  container: {
    backgroundColor: `#2f4f4f`,
    flexDirection: 'row',
    marginRight: 20,
    marginTop: 15,
    alignItems: 'center',
    width: deviceWidth - 50,
    borderRadius: radius,
    height: 36,
  },
  labelStyle: {
    fontSize: 15,
    paddingLeft: 16,
    color: `#ffd700`,
  },
  iconStyle: {
    marginLeft: 7,
    paddingTop: 1,
  },
  labelStyleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 160,
    //justifyContent: 'flex-end',
  },
  btnStyle: {
    flexDirection: 'row',
  },
});
