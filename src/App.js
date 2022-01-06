import 'react-native-gesture-handler';
//import registerRootComponent from 'expo/build/launch/registerRootComponent';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Footer from './components/Footer';

import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackNavigator } from './components/AuthStackNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Header from './components/Header';
import { NavigationContainer } from '@react-navigation/native';

/* import {
  HomeScreen,
  ServicesScreen,
  LoginScreen,
  SignupScreen,
} from './src/screens'; */
import HomeScreen from './screens/HomeScreen';
import ServicesScreen from './screens/ServicesScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import CouponScreen from './screens/CouponScreen';
import Maps from './screens/Maps';
import CartScreen from './screens/CartScreen';

import { StyleSheet } from 'react-native';

const Drawer = createDrawerNavigator();
const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      {<Drawer.Screen component={HomeScreen} name="Home" />}
      <Drawer.Screen component={ServicesScreen} name="Services" />
      <Drawer.Screen component={CouponScreen} name="Coupons" />

      <Drawer.Screen component={LoginScreen} name="Login" />
      <Drawer.Screen component={SignupScreen} name="Register" />
      {/* <Drawer.Screen component={CartScreen} name="CartScreen" /> */}
    </Drawer.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* {<RootStack.Screen component={HomeScreen} name="Home" />}
        <RootStack.Screen component={ServicesScreen} name="Services" />
        <RootStack.Screen component={ContactScreen} name="Contact us" />
        <RootStack.Screen component={LoginScreen} name="Login" />
        <RootStack.Screen component={SignupScreen} name="Register" /> */}
        <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <>
      <Header />

      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
//AppRegistry.registerComponent('E-vents', () => App);
// node_modules/expo/AppEntry.js
