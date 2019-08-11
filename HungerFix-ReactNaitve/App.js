import React, { Component } from 'react'
import { View, Button, Image, Text } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      locationSet: false,
      isLoading: false
    }
  }

  componentDidMount() {
  }

  getLocationByDistance() {
  }
  
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <Image source={require('./assets/images/logo-2-lunch-picker.png')} />


          <Text>Only use this app if you really can't decide what you want to eat for lunch!</Text>
          <Text>We are not responsible for any lunch monsters left unfed.</Text>


        <Button
          onPress={() => this.getLocationByDistance()}
          title="I've got the munchies"
          color="#841584"
          accessibilityLabel="Load next screen"
        />

          <Text>Choose your food options on the next screen.</Text>

      </View>
    );
  }
}