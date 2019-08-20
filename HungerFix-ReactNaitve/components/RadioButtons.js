import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import mainStyles from '../styles';

export default class RadioButtons extends Component {
    render() {
        const { options, value, onChange } = this.props;

        return (
            <View>
                {options.map(item => {
                    return (
                        <View key={item.key} style={styles.radiobutton}>
                            <TouchableOpacity
                                onPress={() => {
                                    onChange(item.key);
                                }}>
                                
                                <View>
                                    {value === item.key && <View style={styles.checkedCircle} />}
                                    {value != item.key && <View style={styles.circle} />}
                                </View>
                                <View>
                                    <Text style={styles.primaryText}>{item.primaryText}</Text>
                                    <Text style={styles.secondaryText}>{item.secondaryText}</Text>
                                </View>
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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#333333',
    },

    checkedCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF194',
    },
    primaryText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    },
    secondaryText:{
        color: '#fff',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 21
    }
});
