import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions, SafeAreaView } from 'react-native';
//import { Icon } from 'react-native-vector-icons/Icon';
// import { color } from 'react-native-reanimated';
import '../App';

import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

/* export default class Header extends React.Component {
  render() { */
export default function Header() {
  return (
    <SafeAreaView>
      <View
        style={{
          width: deviceWidth - 10,
          height: 60,
          backgroundColor: `#7fff00`,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 10,
          marginTop: 40,
          marginLeft: 5,
          // paddingLeft: 20,
          borderRadius: 6,
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: '700',
              //marginRight: deviceWidth / 1.3,
              //paddingRight: 50,
              justifyContent: 'center',
              //fontFamily: 'Ink Free',
              paddingTop: 10,
              color: '#0B0C0B',

              paddingLeft: 0,
              marginLeft: 0,
              paddingRight: 75,
            }}
          >
            Events
          </Text>
          {/* <statusbar barStyle="default" /> */}
          <TouchableOpacity
            // onPress={() => navigation.navigate('CartScreen')}
            style={{
              backgroundColor: `#000000`,
              width: 45,
              height: 45,
              //justifyContent: 'center',

              marginLeft: 160,
              //paddingLeft: 190,
              marginTop: 8,
              borderRadius: 5,
            }}
            // onPress={() => navigation.navigate('CartScreen')}
          >
            <Icon
              name="cart"
              type="ionicon"
              size={35}
              color={`#dc143c`}
              // marginLeft={4}
              style={{
                //justifyContent: 'flex-end',
                paddingRight: 5,
                //marginLeft: deviceWidth - 100,
                //marginRight: 20,
                //paddingLeft: 10,
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: 5,
              }}
            ></Icon>
            <Text
              style={{
                position: 'absolute',
                top: 5,
                left: 19,
                paddingLeft: 2,
                paddingRight: 2,
                backgroundColor: `#ffd700`,
                color: `#000000`,
                borderRadius: 5,
              }}
            >
              0
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

//const deviceWidth = Dimensions.get('window').width;
const deviceWidth = Math.round(Dimensions.get('window').width);

/* const styles = StyleSheet.create({
  container: {
    width: deviceWidth,
    height: 40,
    backgroundColor: `#00fa9a`,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  }, 
});*/

// export default Header;
