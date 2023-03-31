import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Avatar() {
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.img} source={require('../../../public/images/perfil.jpg')}/>
            </View>
            <View>
                <Text style={styles.text}>Sherlock Holmes</Text>
                <Text style={styles.text}>@S_Holmes</Text>
            </View>
            <View>
                <FontAwesome5 name="user-edit" size={24} color="#c4c4c4" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#272B30',
        borderRadius: 10,
        height: 120,
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    },
    img:{
        height: 100,
        width: 100,
        borderRadius: 50
    },
    text:{
        color: 'white',
        fontSize: 16
    }
})