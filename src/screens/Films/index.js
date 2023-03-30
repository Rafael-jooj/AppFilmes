import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Search from '../../components/Search';
import Film from '../../components/Film';
import { REACT_API_KEY } from '@env'

export default function Films() {

  const KEY = process.env.REACT_API_KEY

  const [filmes, setFilmes] = useState([]);
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=en-US&page=1`)
      .then(data => data.json())
      .then(data => setFilmes(data.results))
      .catch(error => console.log(error))
  },[])
  
  return (
      <View style={styles.container}>
          <Text style={styles.title}>Search</Text>
          <Search style={styles.search}/>
          <FlatList
            data={filmes}
            key={filmes.id}
            renderItem={({item})=> <Film path={item.poster_path} name={item.title} description={item.overview}/>}
          />
      </View>
    );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#1A1D1F',
    flex: 1
  },
  search:{
   marginTop: 30
  },
  title:{
    marginTop: 50,
    color: '#fff',
    fontSize: 22,
    paddingStart: '5%',
    marginBottom: 10
  }
})