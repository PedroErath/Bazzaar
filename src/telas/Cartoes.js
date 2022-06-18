import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'

export default class Cartoes extends Component {
    render() {
        return (
            <View style={estilo.View}>
                <Text style={estilo.texto}>ACEITAMOS:</Text>
                <View style={estilo.viewLinks}>
                    <Image source={require('../images/visa.png')} style={estilo.imagemLinks} />
                    <Image source={require('../images/Elo.png')} style={estilo.imagemLinks} />
                    <Image source={require('../images/paypal.jpeg')} style={estilo.imagemLinks} />
                    <Image source={require('../images/master.png')} style={estilo.imagemLinks} />
                </View>
            </View>
        )
    }
}

const estilo = StyleSheet.create({
    texto: {
        fontSize: 15,
        padding: 10,
        color: 'white',
        fontWeight: 'bold'
    },
    imagemLinks: {
        height: 50,
        width: 50,
        borderRadius: 10
    },
    View: {
        flex: 1,
        backgroundColor: '#889C9B',
    },
    viewLinks: {
        flexDirection: 'row',
        margin: 15,
        justifyContent: 'space-around',
        padding: 10
    },
})