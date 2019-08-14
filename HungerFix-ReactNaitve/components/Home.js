import React, { Component } from 'react'
import { ImageBackground, StyleSheet, View, TouchableOpacity, Image, Text, StatusBar } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

export default class App extends Component {

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" /> 
                <ImageBackground source={require("../assets/images/background.png")} style={styles.backgroudImage}>
                    <View style={{ flex: 1}}>
                        <Image style={styles.fluidImg} source={require('../assets/images/logo-2-lunch-picker.png')} />
                    </View>
                    <View>
                        <Text style={[styles.text, styles.yellowText]}>Only use this app if you really can't decide what you want to eat for lunch! We are not responsible for any lunch monsters left unfed.</Text>

                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.dispatch(StackActions.reset({
                                    index: 0,
                                    actions: [
                                        NavigationActions.navigate({ routeName: 'Locations' })
                                    ],
                                }))
                            }}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>
                                    I've got the munchies
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <Text style={[styles.text, styles.smallText]}>Choose your food options on the next screen.</Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: '#D1384F',
        paddingTop: 30
    },
    backgroudImage: {
        flex: 1,
        paddingRight: 15, 
        paddingLeft: 15
    },
    fluidImg: {
        width: '100%',
        resizeMode: "contain",
    },
    text: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '400',
        fontSize: 14,
        marginTop: 15,
        marginBottom: 15,
        lineHeight: 21
    },
    yellowText: {
        color: "#FFF194"
    },
    smallText: {
        fontSize: 12,
    },

    button: {
        alignItems: 'center',
        backgroundColor: '#384053',
        paddingVertical: 15,
        borderBottomWidth: 3,
        borderBottomColor: '#131722',
        borderRadius: 5
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: '700'
    }
});