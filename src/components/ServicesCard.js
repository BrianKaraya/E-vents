import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';

// import IconLabel from './IconLabel';

const ServicesCard = (props) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.imageStyle}
        // source={require('../../assets/rsz_kids.jpg')}
        source={props.info.image}
      />
      <View style={styles.infoStyle}>
        <Text style={styles.titleStyle}>{props.info.name}</Text>

        <Text style={styles.detailStyle}>{props.info.description}</Text>
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
    height: 430,
    borderRadius: radius,
    /*  borderTopLeftRadius: radius,
    borderTopRightRadius: radius, */
    //shadowColor: `#afeeee`,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    elevation: 9,
    shadowRadius: 10,
    marginTop: 20,
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
    color: `#ff7f50`,
  },
  detailStyle: {
    fontSize: 17,
    //fontWeight: 'normal',
  },
  infoStyle: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
});
export default ServicesCard;
