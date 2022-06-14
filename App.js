import React, { Component } from 'react'
import {
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
  Image
} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default class App extends Component {
  render() {
    return (
      <ScrollView>
        <View style={estilo.item1header}>
          <TextInput placeholder='🔍Buscar' placeholderTextColor={'black'} style={estilo.textinput} />
          <Text style={estilo.texto}>🛒Carrinho</Text>
          <Text style={estilo.texto}>Login</Text>
        </View>
        <View style={estilo.item1header}>
          <Text style={estilo.texto}>Novidade</Text>
          <Text style={estilo.texto}>Promoções</Text>
          <Text style={estilo.texto}>Feminina</Text>
          <Text style={estilo.texto}>Masculino</Text>
        </View>
        <View style={estilo.viewInicio}>
          <Text style={estilo.titulo}>BAZZAAR</Text>
          <Text style={estilo.texto3}>Nossos produtos são inspirados pelas pessoas que estão à nossa volta, com suas belezas e qualidades. Produtos de bom gosto especialmente para você.</Text>
        </View>
        <View style={estilo.imagem}>
          <Image source={require('./src/images/banner.jpeg')} style={{ width: wp('95%') }} />
        </View>
        <View>
          <Text style={estilo.titulo2}>Moda Feminina</Text>
        </View>
        <View style={estilo.viewprodutos}>
          <View style={estilo.produtos}>
            <Image source={require('./src/images/banner.jpeg')} style={{ width: wp('25%') }} />
            <Text style={estilo.texto2}>Blusa</Text>
            <Text style={estilo.texto2}>R$39,99</Text>
          </View>
          <View style={estilo.produtos}>
            <Image source={require('./src/images/banner.jpeg')} style={{ width: wp('25%') }} />
            <Text style={estilo.texto2}>Blusa</Text>
            <Text style={estilo.texto2}>R$39,99</Text>
          </View>
          <View style={estilo.produtos}>
            <Image source={require('./src/images/banner.jpeg')} style={{ width: wp('25%') }} />
            <Text style={estilo.texto2}>Blusa</Text>
            <Text style={estilo.texto2}>R$39,99</Text>
          </View>
        </View>
        <View>
          <Text style={estilo.titulo2}>Moda Masculina</Text>
        </View>
        <View style={estilo.viewprodutos}>
          <View style={estilo.produtos}>
            <Image source={require('./src/images/banner.jpeg')} style={{ width: wp('25%') }} />
            <Text style={estilo.texto2}>Blusa</Text>
            <Text style={estilo.texto2}>R$39,99</Text>
          </View>
          <View style={estilo.produtos}>
            <Image source={require('./src/images/banner.jpeg')} style={{ width: wp('25%') }} />
            <Text style={estilo.texto2}>Blusa</Text>
            <Text style={estilo.texto2}>R$39,99</Text>
          </View>
          <View style={estilo.produtos}>
            <Image source={require('./src/images/banner.jpeg')} style={{ width: wp('25%') }} />
            <Text style={estilo.texto2}>Blusa</Text>
            <Text style={estilo.texto2}>R$39,99</Text>
          </View>
        </View>
        <View style={estilo.footer}>
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/220/220790.png'}} style={estilo.imagem2} />
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/87/87390.png'}} style={estilo.imagem2} />
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1384/1384033.png'}} style={estilo.imagem2} />
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/20/20673.png'}} style={estilo.imagem2} />
        </View>
      </ScrollView>
    )
  }
}

const estilo = StyleSheet.create({
  item1header: {
    backgroundColor: '#242526',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderBottomWidth: 1
  },
  texto: {
    fontSize: 12,
    padding: 10,
    color: 'white',
    fontWeight: 'bold'
  },
  texto3: {
    flex:5,
    fontSize: 15,
    padding: 10,
    color: 'black',
    margin:5,
    textAlign: 'justify'
  },
  texto2: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold'
  },
  titulo:{
    flex:3,
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    margin:5
  },
  titulo2: {
    fontSize: 20,
    color: 'black',
    margin: 20,
  },
  textinput: {
    width: hp('23%'),
    margin: 4,
    backgroundColor: 'white',
    borderWidth: 1,
  },
  imagem: {
    alignItems: 'center',
    padding: 10,
  },
  viewprodutos: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 10
  },
  produtos: {
    padding: 10,
    alignItems: 'center'
  },
  imagemprodutos: {
    height: 50,
    width: 50
  },
  viewInicio:{
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  footer:{
    borderTopWidth: 1,
    alignItems: ''
  },
  imagem2:{
    height:50,
    width: 50,
  }
})