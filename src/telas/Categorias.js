import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'

export default class Categotias extends Component {
    render() {
        return (
            <View style={estilo.View}>
                <View style={estilo.viewCategorias}>
                    <Text style={estilo.texto}>Novidade</Text>
                </View>
                <View style={estilo.viewCategorias}>
                    <Text style={estilo.texto}>Promoções</Text>
                </View>
                <View style={estilo.viewCategorias}>
                    <Text style={estilo.texto}>Feminina</Text>
                </View>
                <View style={estilo.viewCategorias}>
                    <Text style={estilo.texto}>Masculino</Text>
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
    texto: {
        fontSize: 15,
        padding: 10,
        color: 'white',
        fontWeight: 'bold',
        borderWidth: 1,
        borderRadius: 15,
    },
    viewCategorias: {
        margin: 5
    }
})