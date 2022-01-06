import React from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  SafeAreaView,
  Input,
} from 'react-native';

import { FilledButton } from '../components/FilledButton.js';

import { TxtBtn } from '../components/TxtBtn.js';
import { Error } from '../components/Error.js';
import Footer from '../components/Footer.js';

import LoginScreen from './LoginScreen.js';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { CloseBtn } from '../components/CloseBtn.js';
import ShoppingCart from '../components/ShoppingCart.js';

// const SignupScreen = ({ navigation }) => {
function CartScreen() {
  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          margin: 20,
        }}
      >
        <ScrollView>
          <ShoppingCart />
        </ScrollView>
      </View>
    </>
  );
}

const deviceWidth = Math.round(Dimensions.get('window').width);

const deviceHeight = Math.round(Dimensions.get('window').height);
const styles = StyleSheet.create({
  btn1: {
    padding: 10,
    borderRadius: 8,
    textAlign: 'center',
  },
  bottomView: {
    flex: 1,
    backgroundColor: '#696969',
    //bottom: 50,
    // borderTopStartRadius: 60,
    //borderTopEndRadius: 60,
    // height: 300,
    width: deviceWidth - 30,
    height: deviceHeight - 20,
    borderRadius: 20,
  },
  input: {
    marginVertical: 20,
    padding: 10,
    borderRadius: 8,
    backgroundColor: `#dcdcdc`,
    width: deviceWidth - 50,
  },
  loginBtn: {
    marginVertical: 15,
    marginVertical: 35,
    width: deviceWidth - 50,
  },
  inputContainer: {
    padding: 40,
    //height: 800,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CartScreen;
