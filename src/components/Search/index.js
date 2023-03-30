import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Search() {

    const window = useWindowDimensions()

    return (
        <View style={styles.container}>
            <Ionicons style={styles.search} name="search" size={25} color="#c4c4c4" />
            <TextInput style={styles.input}/>
            {/* <Ionicons name="close" size={30} color="#c4c4c4" /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '90%',
        height: 40,
        backgroundColor: '#272B30',
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        paddingStart: '5%',
        paddingEnd: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative'
    },
    input:{
        width: '90%'
    },
    search:{
        position: 'absolute',
        start: '5%'
    }
})