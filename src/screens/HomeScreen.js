import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from 'react-native';
import '../App.js';

import Card from '../components/Card.js';
import Footer from '../components/Footer.js';
//import MapView from 'react-native-maps';
import MapApi from '../components/MapApi.js';

const events = [
  {
    id: 1,
    name: 'Kids Outing',
    category: 'Family',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aliquam.',
    where: 'Groningen',
    when: '12/12/21',
    price: '15',
    image: require('../../assets/rsz_kids.jpg'),
  },
  {
    id: 2,
    name: 'Bachata',
    category: 'Culture',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aliquam.',
    where: 'Heerlen',
    when: '12/23/21',
    price: 'Free',
    image: require('../../assets/upcomingevent4.jpg'),
  },
  {
    id: 3,
    name: 'Party',
    category: 'Party',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aliquam.',
    where: 'Rotterdam',
    when: '12/22/21',
    price: '12',
    image: require('../../assets/rsz_crowd.jpg'),
  },
  {
    id: 4,
    name: 'Show your moves',
    category: 'Dance',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aliquam.',
    where: 'Maastricht',
    when: '11/12/21',
    price: '10',
    image: require('../../assets/events4.jpg'),
  },
  {
    id: 5,
    name: 'Zumba',
    category: 'Sport',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, aliquam.',
    where: 'Maastricht',
    when: '11/12/21',
    price: '5',
    image: require('../../assets/rsz_zumba.jpg'),
  },
];

const deviceWidth = Math.round(Dimensions.get('window').width);
const deviceHeight = Math.round(Dimensions.get('window').height);

function HomeScreen(props) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: deviceHeight,
      }}
    >
      {/* <Text>Upcoming events..</Text> */}

      <ScrollView style>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <FlatList
            data={events}
            renderItem={({ item }) => {
              return <Card info={item} />;
            }}
            keyExtractor={(events) => events.id.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View style={{ width: deviceWidth - 10. }}>
          <MapApi />
          <Footer />
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
