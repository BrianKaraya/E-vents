import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';

import IconLabel from './IconLabel';

const Card = (props) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.imageStyle}
        // source={require('../../assets/rsz_kids.jpg')}
        source={props.info.image}
      />
      <View style={styles.infoStyle}>
        <Text style={styles.titleStyle}>{props.info.name}</Text>
        <Text style={styles.detailStyle}>Category: {props.info.category}</Text>
        <Text style={styles.detailStyle}>
          Description: {props.info.description}
        </Text>
        <Text style={styles.detailStyle}>Date: {props.info.when}</Text>
        <Text style={styles.detailStyle}>Venue: {props.info.where}</Text>
        <Text style={styles.detailStyle}>Price: {props.info.price} Euro</Text>

        <IconLabel />
      </View>
    </View>
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
export default Card;
