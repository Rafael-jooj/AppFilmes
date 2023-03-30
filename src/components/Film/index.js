import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Film(props) {

    const img_path = 'https://image.tmdb.org/t/p/original';

    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.imagem} source={{uri:(`${img_path}${props.path}`)}}/>
            </View>
            <View>
                <Text style={styles.title}>{props.name}</Text>
                <Text numberOfLines={5} style={styles.description}>{props.description}</Text>
                <View style={{flexDirection: 'row', marginLeft: 10, marginTop: 10}}>
                    <Ionicons name="star" size={18} color="yellow" />
                    <Ionicons name="star" size={18} color="yellow" />
                    <Ionicons name="star" size={18} color="yellow" />
                    <Ionicons name="star" size={18} color="yellow" />
                    <Ionicons name="star-outline" size={18} color="yellow" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingStart: '5%',
        paddingEnd: '5%',
        flexDirection: 'row',
    },
    imagem:{
        width: 100,
        height: 180,
        borderRadius: 10,
        marginTop: 10
    },
    title:{
        color: 'white',
        fontSize: 18,
        width: 250,
        marginTop: 10,
        marginLeft: 10
    },
    description:{
        color: 'white',
        width: 250,
        marginTop: 10,
        marginLeft: 10
    }
})