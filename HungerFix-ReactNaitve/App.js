import React, { Component } from 'react'

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
        <Button
          onPress={() => this.getLocationByDistance()}
          title="Load Locations"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}