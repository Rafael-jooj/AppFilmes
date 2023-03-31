import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function Card(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.box}>
                <Ionicons name={props.icon} size={24} color="#c4c4c4" />
                <Text style={{color: '#c4c4c4', fontSize: 16, marginLeft: 20}}>{props.name}</Text>
                <MaterialIcons style={styles.icone} name="arrow-forward-ios" size={24} color="#c4c4c4" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#272B30',
        height: 50,
        borderRadius: 10,
        marginBottom: 20
    },
    box:{
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingStart: '5%',
        paddingEnd: '5%',
        width: '100%'
    },
    icone:{
        position:'absolute',
        right: 10
    }
})