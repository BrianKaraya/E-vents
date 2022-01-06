import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';

import IconLabel from './IconLabel';

const ShoppingCart = () => {
  return (
    <ScrollView style={styles.cardContainer}>
      <View style={styles.infoStyle}>
        {/* <Text style={styles.titleStyle}>{props.info.name}</Text> */}

        {/* <Text style={styles.detailStyle}>Price: {props.info.price} Euro</Text> */}
        <Text style={styles.titleStyle}>Your cart is empty</Text>
      </View>
    </ScrollView>
  );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const radius = 20;

const styles = StyleSheet.create({
  cardContainer: {
    width: deviceWidth - 25,
    backgroundColor: `#696969`,
    height: 550,
    borderRadius: radius,
    /*  borderTopLeftRadius: radius,
    borderTopRightRadius: radius, */
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.75,
    elevation: 9,
    shadowRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  imageStyle: {
    height: 300,
    width: deviceWidth - 25,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 20,
    color: `#ff7f50`,
  },
  detailStyle: {
    fontSize: 17,
    //fontWeight: 'normal',
    paddingLeft: 10,
  },
  infoStyle: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
});
export default ShoppingCart;
