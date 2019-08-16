import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class RadioButtons extends Component {
    state = {
        value: null,
    };

    render() {
        const { options } = this.props;
        const { value } = this.state;

        return (
            <View>
                {options.map(item => {
                    return (
                        <View key={item.key} style={styles.radiobutton}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({
                                        value: item.key,
                                    });
                                }}
                            >
                                
                                {value === item.key && <View style={styles.checkedCircle} />}
                                {value != item.key && <View style={styles.circle}></View>}

                                <Text>{item.primaryText }</Text>
                                <Text>{item.secondaryText}</Text>
                            </TouchableOpacity>
                        </View>
                    );
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },

    circle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ACACAC',
        alignItems: 'center',
        justifyContent: 'center',
    },

    checkedCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ACACAC',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#794F9B',
    },
});
