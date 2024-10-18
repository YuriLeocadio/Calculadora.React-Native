import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Display({value}){
    return(
        <View style={styles.displayContainer}>
            <Text style={styles.displayText}>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    displayContainer:{
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
    },

    displayText:{
        fontSize: 70,
        color: '#FFF',
    }
});