import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

export default class Searchpage extends React.Component{

    render() {
        return(
            <View>
                <Text style={estilosdeprueba.textonormal}>Pagina de Busqueda</Text>
            </View>

        );
    }
}

const estilosdeprueba = StyleSheet.create({

    textoadvertencia: {
        textAlign: 'center',
        color: '#bbc524',

    },
    textoerror:{
        textAlign: 'center',
        color: '#c6383b',
    },
    textoinfo:{
        textAlign: 'center',
        color: '#39bbc0',
    },
    textocorrecto: {

        textAlign: 'center',
        color: '#20c057',

    },
    textonormal:{
        textAlign: 'center',
        color: '#7a8a90'
    },
    textoaresaltar:{
        textAlign: 'center',
        color: '#bed2d8'

    },
});
