/* import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import App from '../App';

export class Maps extends Component {
  state = {
    showingInfoWindow: false, // Hides or shows the InfoWindow
    activeMarker: {}, // Shows the active marker upon click
    selectedPlace: {}, // Shows the InfoWindow to the selected place upon a marker
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={7}
        initialCenter={{
          /* lat: 53.206451,
          lng: 6.54478, */
/*lat: 52.0809856,
          lng: 5.127684,
        }}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={'Bachata, 20/11/21'}
          position={{ lat: 52.370216, lng: 4.895168 }}
          icon={
            'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
          }
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Dance Party, 25/12/21'}
          position={{ lat: 51.9244424, lng: 4.47775 }}
          icon={<i class="fas fa-map-pin"></i>}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Show Your Moves, 23/10/21'}
          position={{ lat: 50.8512438, lng: 5.6909768 }}
        />
        <Marker
          onClick={this.onMarkerClick}
          position={{ lat: 53.206451, lng: 6.54478 }}
          name={'Kids Outing, 12/12/21'}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={'Zumba, 23/01/22'}
          position={{ lat: 51.9994572, lng: 4.3627245 }}
        />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h5>{this.state.selectedPlace.name}</h5>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

Maps = GoogleApiWrapper({
  apiKey: 'AIzaSyDN8wq31jFIXWMWylhGaWjDhpNsyPoBDUI',
})(Maps);

 */

import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Animated,
  Image,
  Text,
  ImageBackground,
} from 'react-native';
import MapView from 'react-native-maps';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventLocations: [
        {
          rotation: 78,
          latitude: 52.0808856,
          longitude: 5.127684,
        },
        {
          rotation: -10,
          latitude: 51.9244424,
          longitude: 4.47775,
        },
        {
          rotation: 262,

          latitude: 52.370216,
          longitude: 4.895168,
        },
        /*  {
          
          latitude: 51.9994572,
          longitude: 4.3627245,
        }, */
      ],
    };
    this.initialRegion = {
      latitude: 52.0808856,
      longitude: 5.127684,
      latitudeDelta: 0.00922,
      longitudeDelta: 0.00421,
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.maptext}>Event Locations</Text>
        <MapView
          style={styles.container}
          initialRegion={this.initialRegion}
          maxZoomLevel={7}
        >
          {this.state.eventLocations.map((eventLocation, i) => (
            <MapView.Marker key={i} coordinate={eventLocation}>
              <Animated.Image
                style={{
                  transform: [{ rotate: `${eventLocation.rotation}deg` }],
                  width: 40,
                  height: 40,
                }}
                source={require('../../assets/flag.png')}
              />
            </MapView.Marker>
          ))}
        </MapView>
      </View>
    );
  }
}

const deviceWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  container: {
    /*  position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0, */
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    //width: deviceWidth - 25,
    height: 400,
    borderRadius: 50,

    //marginTop: 5,
  },
  maptext: {
    marginVertical: 10,
    color: `#00bfff`,
    textAlign: 'center',
    paddingBottom: 0,
    marginTop: 15,
    fontWeight: 'bold',
  },
});
