import React from 'react';
import { View, Dimensions, Image, Text } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'; 

const {width} = Dimensions.get('window')

export default function List(props) {

    const img_path = 'https://image.tmdb.org/t/p/original';

    return (
        <View style={{marginTop:20, marginLeft: 20, alignItems: 'center'}}>
            <Image style={{width: 120, height: 180, borderRadius: 10, marginBottom: 10}} source={{uri: `${img_path}${props.path}`}}/>
            <Text style={{width: 120, color:'white', fontWeight: 'bold'}}>{props.title}</Text>
        </View>
    );
}