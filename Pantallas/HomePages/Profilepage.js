import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import * as firebase from 'firebase';
import Firebase from "../Firebase";

// Initializa Firebase
/*var config = {
    apiKey: "AIzaSyCzDXmy53FGtSAdK1N5KFeouz5E5VzdyJ8",
    authDomain: "marketu-713b9.firebaseapp.com",
    databaseURL: "https://marketu-713b9.firebaseio.com",
    projectId: "marketu-713b9",
    storageBucket: "marketu-713b9.appspot.com",
    messagingSenderId: "466641196532"
  };*/


/*var nombre, email, uid;
nombre = "Test";*/

export default class Profilepage extends React.Component{

    constructor (){
        super()
        this.state = {
            email: Firebase.getCurrentEmail(),
        }
    }
    componentWillMount(){

        if(!firebase.apps.length){
            firebase.initializeApp();
        }
    }

    render() {
        /*if (useractive != null){
            nombre = useractive.name;

        }*/
        return(
            <View>
                <Text style={estilosdeprueba.textoresaltar}>Profile Page</Text>
                <Text style={estilosdeprueba.textoresaltar}>Nombre de usuario: </Text>
                <Text style={estilosdeprueba.textonormal}>{this.state.email}</Text>

            </View>
        );
    }
}

const estilosdeprueba = StyleSheet.create({
    textonormal:{
        textAlign: 'center',
        color: '#7a8a90'
    },

    textoresaltar: {
        textAlign: 'center',
        color: '#bed2d8',

    },
});