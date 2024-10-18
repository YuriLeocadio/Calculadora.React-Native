import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Button({
    w = 0,
    h = null,
    text = '',
    backgroundColor = '#333333',
    textColor = '#FFF',
    onPress = () => {},
}){
    const height = h ?? w
    const width = w

    return(
        <View style={[styles.buttonContainer, {width: width, height: height}]}>
            <TouchableOpacity
            style={[styles.button, {backgroundColor: backgroundColor}]}
            onPress={() => onPress(text)}
            >
                <Text style={[styles.buttonText, {color: textColor}]}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 10,
    },
    button: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 25,
    },
});