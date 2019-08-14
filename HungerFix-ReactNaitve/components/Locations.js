import React, { Component } from 'react'
import { FlatList, ActivityIndicator, Text, View, Button } from 'react-native';
import RNShake from 'react-native-shake';
import { StackActions, NavigationActions } from 'react-navigation';

// faster on Android https://github.com/Agontuk/react-native-geolocation-service according to this article https://facebook.github.io/react-native/docs/geolocation
// import Geolocation from 'react-native-geolocation-service';

export default class Locations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationSet: false,
            isLoading: false
        }
    }

    componentWillMount() {
        RNShake.addEventListener('ShakeEvent', () => {
            this.getLocationByDistance();
        });
    }

    componentDidMount() {
    }

    componentWillUnmount() {
        RNShake.removeEventListener('ShakeEvent');
    }

    getLocationByDistance() {
        this.setState({ isLoading: true });
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                this.fetchLocationData(position.coords.latitude, position.coords.longitude);
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        )
    }

    fetchLocationData(lat, lng) {
        const backendUrl = 'https://api.foursquare.com/v2/venues/search';
        const token = 'WQYRTF4NQJSA2TLXN3ULY4DKIAI05C3PR3L31LKNGCY5ZROF';
        const radius = '500';

        fetch(backendUrl + '?ll=' + lat + ',' + lng + '&radius=' + radius + '&categoryId=4d4b7105d754a06374d81259' + '&oauth_token=' + token + '&v=' + '20150510')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.response.venues,
                    locationSet: true
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        if (this.state.isLoading) {
            var loadingAnimation = < ActivityIndicator />;
        }

        if (this.state.locationSet) {
            var locationsList = <FlatList
                data={this.state.dataSource}
                renderItem={({ item }) => <Text>{item.name}</Text>}
                keyExtractor={({ id }, index) => id}
            />;
        }

        return (
            <View style={{ flex: 1, paddingTop: 30 }}>
                <StatusBar barStyle="light-content" /> 
                {loadingAnimation}
                {locationsList}
                <Button
                    onPress={() => this.getLocationByDistance()}
                    title="Load Locations"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
                <Button
                    onPress={() => {
                        this.props.navigation.dispatch(StackActions.reset({
                            index: 0,
                            actions: [
                                NavigationActions.navigate({ routeName: 'Home' })
                            ],
                        }))
                    }}
                    title="Back"
                    color="#841584"
                    accessibilityLabel="Back"
                />
            </View>
        );
    }
}