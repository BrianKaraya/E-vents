import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  TextInput,
  ScrollView,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements';

/* @import url(https://weloveiconfonts.com/api/?family=entypo);
@import url(https://weloveiconfonts.com/api/?family=brandico); */

//import IconLabel from './IconLabel';

export default class Footer extends React.Component {
  render() {
    return (
      <View style={styles.footerContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.titleStyle}>
            Subscribe to our newsletter for the latest events
          </Text>

          <TextInput
            style={styles.textInput}
            placeholder="eventseeker@email.com"
            maxLength={20}
            onBlur={Keyboard.dismiss}
            backgroundColor={`#e6e6fa`}
          />
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Subscribe</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.titleStyle}>Contact us </Text>
          <View style={styles.socialIcons}>
            <Icon
              name="logo-whatsapp"
              type="ionicon"
              size={25}
              color={`#32cd32`}
              style={styles.icon}
            />
            <Icon
              name="call-sharp"
              type="ionicon"
              size={25}
              color={`#b0e0e6`}
              style={styles.icon}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.titleStyle}>Stay connected </Text>

          {/* <ion-icon name="logo-facebook" type="ionicon"></ion-icon> */}
          <View style={styles.socialIcons}>
            <Icon
              name="logo-facebook"
              type="ionicon"
              size={25}
              color={`#7b68ee`}
              style={styles.icon}
            />

            <Icon
              name="logo-youtube"
              type="ionicon"
              size={25}
              color={`#8b0000`}
              style={styles.icon}
            />

            <Icon
              name="logo-instagram"
              type="ionicon"
              size={25}
              color={`#ff8c00`}
              style={styles.icon}
            />
          </View>
          <Text style={styles.brandStyle}>Events R Us!</Text>

          {/* <IconLabel />  */}
        </View>
      </View>
    );
  }
}

const deviceWidth = Math.round(Dimensions.get('window').width);

const deviceHeight = Math.round(Dimensions.get('window').height);
const radius = 20;

const styles = StyleSheet.create({
  footerContainer: {
    marginTop: 20,
    width: deviceWidth - 10,
    backgroundColor: '#000000',
    height: 550,
    borderRadius: 12,
    //borderTopLeftRadius: radius,
    //borderTopRightRadius: radius,
    //borderRadius: radius,
    marginBottom: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  inputContainer: {
    paddingTop: 5,

    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderColor: '#ff00ff00',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 40,
    fontSize: 17,
    paddingLeft: 20,
    paddingRight: 20,
    width: deviceWidth - 50,
    backgroundColor: `#dcdcdc`,
    borderRadius: 10,
  },
  saveButton: {
    borderWidth: 1,
    borderColor: '#191970',
    backgroundColor: `#7b68ee`,
    padding: 5,
    marginTop: 20,
    width: deviceWidth - 100,
    borderRadius: 10,
  },
  saveButtonText: {
    color: `#000080`,
    fontSize: 15,
    textAlign: 'center',
  },

  titleStyle: {
    fontSize: 20,
    // fontWeight: 'normal',
    marginBottom: 0,
    color: `#ff7f50`,
    textAlign: 'center',
  },
  detailStyle: {
    fontSize: 17,
    color: `#fffaf0`,
    marginTop: 0,
    //fontWeight: 'normal',
  },
  infoStyle: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  brandStyle: {
    fontSize: 22,
    //fontWeight: 'bold',
    color: `#7fff00`,
    marginTop: 30,
    //justifyContent: 'flex-end',
    //alignItems: 'flex-end',
    marginLeft: 200,
  },
  socialIcons: {
    flexDirection: 'row',
    marginLeft: 0,

    alignItems: 'center',
  },
  icon: {
    shadowOpacity: 0.75,
    elevation: 9,
    shadowRadius: 5,
    marginTop: 20,
    marginBottom: 0,
    flex: -1,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 15,
    color: `#ff8c00`,
  },
});
// export default Footer;
