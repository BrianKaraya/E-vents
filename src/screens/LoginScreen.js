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

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';

import SignupScreen from './SignupScreen.js';
import { Component } from 'react';

const stack = createStackNavigator();

function LoginScreen({ navigation }) {
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
        <View style={styles.bottomView}>
          <View style={styles.inputContainer}>
            <Text style={{ color: `#000000`, fontSize: 28 }}>
              Welcome back..
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType={'email-address'}
            />

            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
            />
            <FilledButton
              title={'Login'}
              style={styles.loginBtn}
              onPress={() => {}}
            />
            <TxtBtn
              title={"Don't have an account? Create one."}
              onPress={() => navigation.navigate('Register')}
            />
          </View>
        </View>
      </View>
    </>
  );
}

const deviceWidth = Math.round(Dimensions.get('window').width);
const deviceHeight = Math.round(Dimensions.get('window').height);
const styles = StyleSheet.create({
  Button: {
    backgroundColor: '#fff',
  },
  bottomView: {
    flex: 1,
    backgroundColor: '#696969',
    //bottom: 50,
    // borderTopStartRadius: 40,
    // borderTopEndRadius: 40,
    height: deviceHeight - 20,
    borderRadius: 20,
    width: deviceWidth - 30,
  },
  input: {
    marginVertical: 20,
    padding: 10,
    borderRadius: 8,
    backgroundColor: `#dcdcdc`,
    width: deviceWidth - 50,
  },
  loginBtn: {
    marginVertical: 35,
    width: deviceWidth - 50,
    color: '#fff',
  },
  inputContainer: {
    padding: 40,
    //height: 800,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
