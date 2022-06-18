import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'

export default class Sobre extends Component {
    render() {
        return (
            <View style={estilo.View}>
                <View style={estilo.viewEndereco}>
                    <Text style={estilo.texto3}>Rua Cafundó, 520</Text>
                    <Text style={estilo.texto3}>Centro, Santo Feriado</Text>
                    <Text style={estilo.texto3}>Aberto de Seg a Sex das 10h às 21h</Text>
                </View>
                <Text style={estilo.texto}>SIGA-NOS</Text>
                <View style={estilo.viewLinks}>
                    <Image source={require('../images/insta.png')} style={estilo.imagemLinks} />
                    <Image source={require('../images/face.png')} style={estilo.imagemLinks} />
                    <Image source={require('../images/twiter.png')} style={estilo.imagemLinks} />
                    <Image source={require('../images/wpp.png')} style={estilo.imagemLinks} />
                </View>
            </View>
        )
    }
}

const estilo = StyleSheet.create({
    View: {
        flex: 1,
        backgroundColor: '#889C9B',
    },
    viewEndereco: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10,
    },
    viewLinks: {
        flexDirection: 'row',
        margin: 15,
        justifyContent: 'space-around',
        padding: 10
    },
    imagemLinks: {
        height: 50,
        width: 50,
        borderRadius: 10
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
})
