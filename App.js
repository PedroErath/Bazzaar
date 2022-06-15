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
        <View style={{ borderBottomWidth: 1, margin: 10, borderColor: '#3B3936' }}>
          <Text style={estilo.titulo}>BAZZAAR</Text>
        </View>
        <View style={estilo.imagem}>
          <Image source={require('./src/images/banner.jpeg')} style={{ width: wp('95%') }} />
        </View>
        <View>
          <Text style={estilo.titulo2}>Moda Feminina</Text>
        </View>
        <View style={estilo.viewprodutos}>
          <View style={estilo.produtos}>
            <Image source={require('./src/images/calca.jpeg')} style={{ width: wp('20%'), height: hp('25%') }} />
            <Text style={estilo.texto2}>Blusa</Text>
            <Text style={estilo.texto2}>R$39,99</Text>
          </View>
          <View style={estilo.produtos}>
            <Image source={require('./src/images/camisa.png')} style={{ width: wp('20%'), height: hp('25%')  }} />
            <Text style={estilo.texto2}>Blusa</Text>
            <Text style={estilo.texto2}>R$39,99</Text>
          </View>
          <View style={estilo.produtos}>
            <Image source={require('./src/images/calca.jpeg')} style={{ width: wp('20%'), height: hp('25%')  }} />
            <Text style={estilo.texto2}>Blusa</Text>
            <Text style={estilo.texto2}>R$39,99</Text>
          </View>
          <View style={estilo.produtos}>
            <Image source={require('./src/images/camisa.png')} style={{ width: wp('20%'), height: hp('25%')  }} />
            <Text style={estilo.texto2}>Blusa</Text>
            <Text style={estilo.texto2}>R$39,99</Text>
          </View>
        </View>
        <View>
          <Text style={estilo.titulo2}>Moda Masculina</Text>
        </View>
        <View style={estilo.viewprodutos}>
          <View style={estilo.produtos}>
            <Image source={require('./src/images/calcam.jpeg')} style={{ width: wp('20%'), height: hp('25%') }} />
            <Text style={estilo.texto2}>Blusa</Text>
            <Text style={estilo.texto2}>R$39,99</Text>
          </View>
          <View style={estilo.produtos}>
            <Image source={require('./src/images/camisam.jpg')} style={{ width: wp('20%'), height: hp('25%') }} />
            <Text style={estilo.texto2}>Blusa</Text>
            <Text style={estilo.texto2}>R$39,99</Text>
          </View>
          <View style={estilo.produtos}>
            <Image source={require('./src/images/calcam.jpeg')} style={{ width: wp('20%'), height: hp('25%') }} />
            <Text style={estilo.texto2}>Blusa</Text>
            <Text style={estilo.texto2}>R$39,99</Text>
          </View>
          <View style={estilo.produtos}>
            <Image source={require('./src/images/camisam.jpg')} style={{ width: wp('20%'), height: hp('25%') }} />
            <Text style={estilo.texto2}>Blusa</Text>
            <Text style={estilo.texto2}>R$39,99</Text>
          </View>
        </View>
        <View style={estilo.viewFooter}>
          <View style={estilo.viewEndereco}>
            <Text style={estilo.texto3}>Rua Cafundó, 520</Text>
            <Text style={estilo.texto3}>Centro, Santo Feriado</Text>
            <Text style={estilo.texto3}>Aberto de Seg a Sex das 10h às 21h</Text>
          </View>
          <Text style={estilo.texto}>SIGA-NOS</Text>
          <View style={estilo.viewLinks}>
            <Image source={require('./src/images/insta.png')} style={estilo.imagemLinks} />
            <Image source={require('./src/images/face.png')} style={estilo.imagemLinks} />
            <Image source={require('./src/images/twiter.png')} style={estilo.imagemLinks} />
            <Image source={require('./src/images/wpp.png')} style={estilo.imagemLinks} />
          </View>
          <Text style={estilo.texto}>ACEITAMOS</Text>
          <View style={estilo.viewLinks}>
            <Image source={require('./src/images/visa.png')} style={estilo.imagemLinks} />
            <Image source={require('./src/images/Elo.png')} style={estilo.imagemLinks} />
            <Image source={require('./src/images/paypal.jpeg')} style={estilo.imagemLinks} />
            <Image source={require('./src/images/master.png')} style={estilo.imagemLinks} />
          </View>
        </View>
      </ScrollView>
    )
  }
}

const estilo = StyleSheet.create({
  item1header: {
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
  texto3: {
    fontSize: 15,
    padding: 5,
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
  viewFooter: {
    borderTopWidth: 1,
    padding: 15,
    backgroundColor:'#486966',
    borderColor: '#3B3936'
  },
  viewLinks: {
    flexDirection: 'row',
    margin: 15,
    justifyContent: 'space-around',
    padding:10
  },
  imagemLinks: {
    height: 50,
    width: 50,
    borderRadius: 10
  },
  viewEndereco:{
    justifyContent:'center',
    alignItems: 'flex-start',
    padding:10,
  }
})