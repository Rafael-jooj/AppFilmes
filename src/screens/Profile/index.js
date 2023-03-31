import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Avatar from '../../components/Avatar';
import Card from '../../components/Card';

export default function Profile() {
 return (
    <View style={styeles.container}>
        <Text style={styeles.title}>Profile</Text>
        <View style={styeles.profile}>
          <Avatar/>
        </View>
        <View>
          <Text style={styeles.subtitle}>Suas Atividades</Text>
          <Card name="Favoritos" icon="heart"/>
          <Card name="Recentes" icon="time"/>
        </View>
        <View>
          <Text style={styeles.subtitle}>Suas Ações</Text>
          <Card name="Configurações" icon="ios-settings-sharp"/>
          <Card name="Minha Assinatura" icon="document"/>
          <Card name="Alterar Senha" icon="key-sharp"/>
          <Card name="Sair" icon="exit-outline"/>
        </View>
    </View>
  );
}

const styeles = StyleSheet.create({
  container:{
    backgroundColor: '#1A1D1F',
    flex: 1,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title:{
    marginTop: '10%',
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  profile:{
    marginTop: 20
  },
  subtitle:{
    color:'white',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10
  }
})