import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        // alignItems: 'stretch',
        backgroundColor: '#D1384F',
        paddingTop: 30,
    },
    content:{
        paddingRight: 15,
        paddingLeft: 15
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
    },
    smallText: {
        fontSize: 12,
    }
});