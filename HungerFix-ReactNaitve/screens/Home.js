import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View, TouchableOpacity, Image, Text, StatusBar } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import mainStyles from '../styles';

export default class App extends Component {

    render() {
        return (
            <View style={mainStyles.container}>
                <StatusBar barStyle="light-content" /> 
                <ImageBackground source={require("../assets/images/background.png")} style={[styles.backgroudImage, mainStyles.content]}>
                    <View style={{ flex: 1}}>
                        <Image style={styles.fluidImg} source={require('../assets/images/logo-2-lunch-picker.png')} />
                    </View>
                    
                    <View>
                        <Text style={[mainStyles.text, styles.yellowText]}>Only use this app if you really can't decide what you want to eat for lunch! We are not responsible for any lunch monsters left unfed.</Text>

                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.dispatch(StackActions.reset({
                                    index: 0,
                                    actions: [
                                        NavigationActions.navigate({ routeName: 'Locations' })
                                    ],
                                }))
                            }}>
                            <View style={mainStyles.button}>
                                <Text style={mainStyles.buttonText}>I've got the munchies</Text>
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.dispatch(StackActions.reset({
                                    index: 0,
                                    actions: [
                                        NavigationActions.navigate({ routeName: 'Map' })
                                    ],
                                }))
                            }}>
                            <View style={mainStyles.button}>
                                <Text style={mainStyles.buttonText}>Map</Text>
                            </View>
                        </TouchableOpacity>

                        <Text style={[mainStyles.text, mainStyles.smallText]}>Choose your food options on the next screen.</Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    backgroudImage: {
        flex: 1
    },
    fluidImg: {
        width: '100%',
        resizeMode: "contain",
    },
    yellowText: {
        color: "#FFF194"
    }
});