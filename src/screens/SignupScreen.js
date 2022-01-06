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

// const SignupScreen = ({ navigation }) => {
function SignupScreen({ navigation }) {
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
          <CloseBtn
            name="close-circle-outline"
            onPress={() => navigation.navigate('Home')}
          />
          <View style={styles.inputContainer}>
            <Text style={{ color: `#000000`, fontSize: 28 }}>Sign up</Text>

            <TextInput
              style={styles.input}
              placeholder="Username"
              keyboardType={'email-address'}
            />
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
            <TextInput
              style={styles.input}
              placeholder=" Repeat password"
              secureTextEntry
            />
            <FilledButton
              title={'Sign up'}
              style={styles.loginBtn}
              onPress={() => {}}
            />
            <TxtBtn
              title={'Already have an account? Login.'}
              onPress={() => navigation.navigate('Login')}
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

export default SignupScreen;
