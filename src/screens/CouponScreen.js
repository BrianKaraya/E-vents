import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from 'react-native';
import { TxtBtn } from '../components/TxtBtn';
import { Link } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

const stack = createStackNavigator();

export default function CouponScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.couponPage}>
          <Text style={styles.linkStyle}>
            <Link to={{ screen: 'Register' }}>Login</Link>
          </Text>{' '}
          or
          <Text style={styles.linkStyle}>
            {' '}
            <Link to={{ screen: 'Login' }}> sign up</Link>
          </Text>{' '}
          for our ongoing and upcoming coupon deals(Upto 75% discount)
        </Text>
      </View>
    </SafeAreaView>
  );
}

const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: deviceWidth - 20,
    borderRadius: 12,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  couponPage: {
    paddingTop: 20,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    paddingBottom: 20,

    /*  display: 'flex',
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap', */
  },
  linkStyle: {
    textDecorationLine: 'underline',
    color: `#dc143c`,
  },
});
