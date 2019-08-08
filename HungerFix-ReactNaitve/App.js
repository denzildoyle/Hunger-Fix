import React, { Component } from 'react'
import { FlatList, ActivityIndicator, Text, View, Button } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      isLoading: true
    }
  }

  componentDidMount() {
  }

  getLocationByDistance(lat, lng, radius){
    var backendUrl = 'https://api.foursquare.com/v2/venues/search';
    var token = 'WQYRTF4NQJSA2TLXN3ULY4DKIAI05C3PR3L31LKNGCY5ZROF';
    fetch(backendUrl + '?ll=' + lat + ',' + lng + '&radius=' + radius + '&categoryId=4d4b7105d754a06374d81259' + '&oauth_token=' + token + '&v=' + '20150510')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.response.venues,
        }, function () {
          console.log(this.state.dataSource);
        });

      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    var lat = "10.6300253";
    var lng = "-61.455232699999996";
    var radius = "500";

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
          <Button
            onPress={this.getLocationByDistance(lat, lng, radius)}
            title="Load Locations"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      )
    }

    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          keyExtractor={({ id }, index) => id}
        />
      </View>
    );
  }
}
