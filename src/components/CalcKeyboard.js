import React from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import Button from './Button';

export default function CalcKeyboard({onKeyPress, clearLabel}){
    const {width} = useWindowDimensions();
    const buttonContainerWidth = (width / 4) - 5

    return (
        <View style={styles.buttonsContainer}>
            <View style={styles.buttonsRow}>
                <Button 
                    w={buttonContainerWidth}
                    text={clearLabel}
                    backgroundColor={'#A5A5A5'}
                    textColor={'#000'}
                    onPress={onKeyPress}
                />
                <Button 
                    w={buttonContainerWidth}
                    text={'+/-'}
                    backgroundColor={'#A5A5A5'}
                    textColor={'#000'}
                    onPress={onKeyPress}
                />
                <Button 
                    w={buttonContainerWidth}
                    text={'%'}
                    backgroundColor={'#A5A5A5'}
                    textColor={'#000'}
                    onPress={onKeyPress}
                />
                <Button 
                    w={buttonContainerWidth}
                    text={'/'}
                    backgroundColor={'#FF9F0A'}
                    onPress={onKeyPress}
                />
            </View>
            <View style={styles.buttonsRow}>
                <Button 
                    w={buttonContainerWidth}
                    text={'7'}
                    onPress={onKeyPress}
                />
                <Button 
                    w={buttonContainerWidth}
                    text={'8'}
                    onPress={onKeyPress}
                />
                <Button 
                    w={buttonContainerWidth}
                    text={'9'}
                    onPress={onKeyPress}
                />
                <Button 
                    w={buttonContainerWidth}
                    text={'x'}
                    backgroundColor={'#FF9F0A'}
                    onPress={onKeyPress}
                />
            </View>
            <View style={styles.buttonsRow}>
                <Button 
                    w={buttonContainerWidth}
                    text={'4'}
                    onPress={onKeyPress}
                />
                <Button 
                    w={buttonContainerWidth}
                    text={'5'}
                    onPress={onKeyPress}
                />
                <Button 
                    w={buttonContainerWidth}
                    text={'6'}
                    onPress={onKeyPress}
                />
                <Button 
                    w={buttonContainerWidth}
                    text={'-'}
                    backgroundColor={'#FF9F0A'}
                    onPress={onKeyPress}
                />
            </View>
            <View style={styles.buttonsRow}>
                <Button 
                    w={buttonContainerWidth}
                    text={'1'}
                    onPress={onKeyPress}
                />
                <Button 
                    w={buttonContainerWidth}
                    text={'2'}
                    onPress={onKeyPress}
                />
                <Button 
                    w={buttonContainerWidth}
                    text={'3'}
                    onPress={onKeyPress}
                />
                <Button 
                    w={buttonContainerWidth}
                    text={'+'}
                    backgroundColor={'#FF9F0A'}
                    onPress={onKeyPress}
                />
            </View>
            <View style={styles.buttonsRow}>
                <Button 
                    w={(width / 2) - 10}
                    h={buttonContainerWidth}
                    text={'0'}
                    onPress={onKeyPress}
                />
                <Button 
                    w={buttonContainerWidth}
                    text={','}
                    onPress={onKeyPress}
                />
                <Button 
                    w={buttonContainerWidth}
                    text={'='}
                    backgroundColor={'#FF9F0A'}
                    onPress={onKeyPress}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonsContainer: {
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 30,
    },
    buttonsRow: {
        flexDirection: 'row',
    },
});