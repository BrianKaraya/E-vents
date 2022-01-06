import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import '../App.js';

import ServicesCard from '../components/ServicesCard.js';
//import IconLabel from '../components/IconLabel.js';
import Footer from '../components/Footer.js';

const services = [
  {
    id: 1,
    name: 'Catering',

    description:
      'We offer the best meals/drinks in town for your events through our long list of restaurants and catering services.',

    image: require('../../assets/bkg2.jpg'),
  },
  {
    id: 2,
    name: 'Advertisement',
    description:
      'Advertise your business/event with us in our site and in different ongoing events.',
    image: require('../../assets/advert.jpg'),
  },
  {
    id: 3,
    name: 'Transport/Accomodation advice',
    description:
      'We offer free hotel reservations/transport advice to our ongoing events.',
    image: require('../../assets/qatar3.jpg'),
  },
];

function ServicesScreen(props) {
  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          // justifyContent: 'center',
          // backgroundColor: '#33F7FF',
        }}
      >
        {/* <Text>Upcoming events..</Text> */}
        {/* <Card /> */}
        <ScrollView>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <FlatList
              data={services}
              renderItem={({ item }) => {
                return <ServicesCard info={item} />;
              }}
              keyExtractor={(services) => services.id.toString()}
              // showsVerticalScrollIndicator={false}
            />
          </View>
          <View style>
            <Footer />
          </View>
        </ScrollView>
      </View>
    </>
  );
}

export default ServicesScreen;
