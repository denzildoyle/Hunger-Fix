import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Item = ({ selected, onChange, title }) => (
    <TouchableOpacity onPress={onChange} activeOpacity={0.8}>
        <View style={[styles.baseStyle, selected && styles.selectedStyle]}>
            <Text style={[styles.text, styles.title]}>{title}</Text>

            <MaterialCommunityIcons
                name={selected ? 'minus' : 'plus'}
                color="#ec3249"
            />
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    baseStyle: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 16,
        marginVertical: 4,
        marginHorizontal: 2,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fef198',
    },
    selectedStyle: {
        backgroundColor: '#2a3044',
    },
    text: {
        color: '#ec3249',
    },
    title: {
        marginRight: 8,
    },
});

export default Item;