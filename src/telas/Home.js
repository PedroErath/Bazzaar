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
      <ScrollView style={{backgroundColor: '#889C9B'}}>
        <View style={estilo.itemheader}>
          <TextInput placeholder='🔍Buscar' placeholderTextColor={'black'} style={estilo.textinput} />
          <Text style={estilo.texto}>🛒Carrinho</Text>
          <Text style={estilo.texto}>Login</Text>
        </View>
        <View style={{ borderBottomWidth: 1, margin: 10, borderColor: '#3B3936' }}>
          <Text style={estilo.titulo}>BAZZAAR</Text>
        </View>
        <View style={estilo.imagem}>
          <Image source={require('../images/banner.jpeg')} style={{ width: wp('95%') }} />
        </View>
        <View>
          <Text style={estilo.titulo2}>Moda Feminina</Text>
        </View>
        <View style={estilo.viewprodutos}>
          <View style={estilo.produtos}>
            <Image source={require('../images/calca.jpeg')} style={{ width: wp('20%'), height: hp('25%') }} />
            <Text style={estilo.texto2}>Blusa</Text>
            <Text style={estilo.texto2}>R$39,99</Text>
          </View>
          <View style={estilo.produtos}>
            <Image source={require('../images/camisa.png')} style={{ width: wp('20%'), height: hp('25%')  }} />
            <Text style={estilo.texto2}>Blusa</Text>
            <Text style={estilo.texto2}>R$39,99</Text>
          </View>
          <View style={estilo.produtos}>
            <Image source={require('../images/calca.jpeg')} style={{ width: wp('20%'), height: hp('25%')  }} />
            <Text style={estilo.texto2}>Blusa</Text>
            <Text style={estilo.texto2}>R$39,99</Text>
          </View>
          <View style={estilo.produtos}>
            <Image source={require('../images/camisa.png')} style={{ width: wp('20%'), height: hp('25%')  }} />
            <Text style={estilo.texto2}>Blusa</Text>
            <Text style={estilo.texto2}>R$39,99</Text>
          </View>
        </View>
        <View>
          <Text style={estilo.titulo2}>Moda Masculina</Text>
        </View>
        <View style={estilo.viewprodutos}>
          <View style={estilo.produtos}>
            <Image source={require('../images/calcam.jpeg')} style={{ width: wp('20%'), height: hp('25%') }} />
            <Text style={estilo.texto2}>Blusa</Text>
            <Text style={estilo.texto2}>R$39,99</Text>
          </View>
          <View style={estilo.produtos}>
            <Image source={require('../images/camisam.jpg')} style={{ width: wp('20%'), height: hp('25%') }} />
            <Text style={estilo.texto2}>Blusa</Text>
            <Text style={estilo.texto2}>R$39,99</Text>
          </View>
          <View style={estilo.produtos}>
            <Image source={require('../images/calcam.jpeg')} style={{ width: wp('20%'), height: hp('25%') }} />
            <Text style={estilo.texto2}>Blusa</Text>
            <Text style={estilo.texto2}>R$39,99</Text>
          </View>
          <View style={estilo.produtos}>
            <Image source={require('../images/camisam.jpg')} style={{ width: wp('20%'), height: hp('25%') }} />
            <Text style={estilo.texto2}>Blusa</Text>
            <Text style={estilo.texto2}>R$39,99</Text>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const estilo = StyleSheet.create({
  itemheader: {
    backgroundColor: '#486966',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#3B3936'
  },
  texto: {
    fontSize: 15,
    padding: 10,
    color: 'white',
    fontWeight: 'bold'
  },
  texto2: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold'
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'black',
    margin: 20,
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
    borderColor: '#3B3936'
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
})