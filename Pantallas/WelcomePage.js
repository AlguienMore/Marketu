import React from 'react';


import indice from './Assets/Indice.js'

import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import Container from "native-base";
import Firebase from "./Firebase";


export default class WelcomePage extends React.Component {
    constructor(){
        super();
        Firebase.initialize();
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('login')}>
            <Image
                style={{flex:1, height: undefined, width: undefined}}
                source={indice.welcome}
                resizeMode="contain"
            />

                </TouchableHighlight>
                <Text style={styles.text}>Holi</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {

        textAlign: 'center',

    },
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#000',

    },


});
