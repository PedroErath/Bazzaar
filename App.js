import React, { Component } from 'react'
import {
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

export default class App extends Component {
  render() {
    return (
      <ScrollView>
        <View style={estilo.header}>
          <View style={estilo.item2header}>
            <Icon name='menu' size={40} color={'white'} />
          </View>
          <View style={estilo.item1header}>
            <Text style={estilo.texto}>Login</Text>
            <Text style={estilo.texto}>🛒Carrinho</Text>
            <TextInput placeholder='🔍Buscar' placeholderTextColor={'black'} style={estilo.textinput} />
          </View>
        </View>
        <View style={{borderBottomWidth:1}}>
          <Text style={estilo.titulo}>BAZZAAR</Text>
        </View>
      </ScrollView>
    )
  }
}

const estilo = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'gray',
  },
  item1header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  item2header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  texto: {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 35,
    color: 'black',
    margin:20,
  },
  textinput: {
    width: 80,
    margin: 4,
    backgroundColor: 'white',
    borderWidth: 1,

  }
})