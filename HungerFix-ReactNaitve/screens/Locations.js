import React, { Component } from 'react';
import { FlatList, ActivityIndicator, Text, View, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import RNShake from 'react-native-shake';
import { StackActions, NavigationActions } from 'react-navigation';
import RadioButtons from '../components/RadioButtons';
import mainStyles from '../styles';

// faster on Android https://github.com/Agontuk/react-native-geolocation-service according to this article https://facebook.github.io/react-native/docs/geolocation
// import Geolocation from 'react-native-geolocation-service';

export default class Locations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locationSet: false,
            isLoading: false,
            key: 500
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
        const radius = this.state.key;

        fetch(backendUrl + '?ll=' + lat + ',' + lng + '&radius=' + radius + '&categoryId=4d4b7105d754a06374d81259' + '&oauth_token=' + token + '&v=' + '20150510')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.response.venues,
                    locationSet: true
                });

                console.log(responseJson.response.venues);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {

        const options = [
            {
                key: 500,
                primaryText: 'I\'m hungry...feed me NOW!',
                secondaryText: 'Walking distance (500 meters)'
            },
            {
                key: 1000,
                primaryText: '15 minutes to spare',
                secondaryText: 'Have wheels... willing to travel (1000 meters)'
            },
            {
                key: 2000,
                primaryText: 'The beast can wait',
                secondaryText: 'Better be worth the wait (2000 meters)'
            }
        ];

        if (this.state.isLoading) {
            var loadingAnimation = < ActivityIndicator />;
        }

        if (this.state.locationSet) {
            var locationsList = <FlatList
                data={this.state.dataSource}
                renderItem={({ item }) => <Text style={mainStyles.text}>{item.name}</Text>}
                keyExtractor={({ id }, index) => id}
            />;
        }

        return (
            <View style={mainStyles.container}>

                <StatusBar barStyle="light-content" /> 
                <RadioButtons
                    options={options}
                    value={this.state.key}
                    onChange={key => this.setState({ key })}
                />
                
                {loadingAnimation}
                {locationsList}
            
                <TouchableOpacity onPress={() => this.getLocationByDistance()} >
                    <View style={mainStyles.button}>
                        <Text style={mainStyles.buttonText}>Show Random Location</Text>
                    </View>
                </TouchableOpacity>
                
                <Text style={[mainStyles.text, mainStyles.smallText]}>Shake device to randomly select a location above.</Text>

                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.dispatch(StackActions.reset({
                            index: 0,
                            actions: [
                                NavigationActions.navigate({ routeName: 'Home' })
                            ],
                        }))
                    }}
                >
                    <Text style={[mainStyles.text, mainStyles.smallText]}>Back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}