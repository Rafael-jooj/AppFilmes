import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList } from 'react-native';
import List from '../../components/List';
import {REACT_API_KEY} from '@env'

export default function Home() {

    const KEY = process.env.REACT_API_KEY;
    const img_path = 'https://image.tmdb.org/t/p/original';
  
    const [filmes, setFilmes] = useState([]);
  
    useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=en-US&page=1`)
        .then(data => data.json())
        .then(data => setFilmes(data.results))
        .catch(error => console.log(error))
    })


    return (
        <View style={styles.container}>
            <View style={styles.poster}>
                <FlatList
                    data={filmes}
                    renderItem={({item})=> <Image style={{width: 400, height: 400}} source={{uri: `${img_path}${item.backdrop_path}`}}/>}
                    key={({item}) => item.id}
                    horizontal
                />
            </View>
            <View style={styles.list}>
                <Text style={styles.title}>Recomendados</Text>
                <FlatList
                    data={filmes}
                    renderItem={({item})=> <List title={item.title} path={item.poster_path}/>}
                    key={({item}) => item.id}
                    horizontal
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#1A1D1F',
    },
    poster:{
        backgroundColor: 'red',
        flex: 1
    },
    list:{
        flex: 1
    },
    title:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: '5%'
    }

})