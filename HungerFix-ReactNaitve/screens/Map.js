import React, { Component } from 'react';
import MapView from 'react-native-maps';

export default class App extends Component {

    render() {
        return (
            <MapView style={{ flex: 1 }} />
        );
    }
}