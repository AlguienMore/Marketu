/*
            PLACEHOLDER CODE

 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Container, Header, Form, Footer, Item, Label, Input, FooterTab, Icon, Title, Button, Content, Left, Body, Right} from 'native-base';
import * as firebase from 'firebase';

// Initializa Firebase
var config = {
    apiKey: "AIzaSyCzDXmy53FGtSAdK1N5KFeouz5E5VzdyJ8",
    authDomain: "marketu-713b9.firebaseapp.com",
    databaseURL: "https://marketu-713b9.firebaseio.com",
    projectId: "marketu-713b9",
    storageBucket: "marketu-713b9.appspot.com",
    messagingSenderId: "466641196532"
  };
  firebase.initializeApp(config);

export default class Login extends React.Component {

    constructor (){
        super()
        this.state = {
            user: "",
            pass: ""
        }
    }

    acceder(){
        firebase.auth().signInWithEmailAndPassword(this.state.user, this.state.pass)
            .then(() => this.props.navigation.navigate('menu') ) //Al iniciar sesión se abrirá el menú principal
            .catch(error => alert("!No se ha podido iniciar sesión! Verifique que los datos proporcionados sean válidos"))
        // En caso de que ocurra un error.
    }

    Salir(){
        firebase.auth().signOut().then(function() {
            // Cierre de sesión exitoso
            alert("ha cerrado sesión correctamente")
        }).catch(function(error) {
            // En caso de que ocurra un error
            alert("he ocurrio un error inesperado al cerrar sesión, intente de nuevo")
        });
    }
    render() {
        return (
            <Container style={estilos.container}>
                <Header>
                    <Left/>
                    <Body>
                    <Title>
                        Login
                    </Title>
                    </Body>
                    <Right/>
                </Header>

                <Content >
                    <Form>
                        <Item floatingLabel>
                            <Label>Correo electronico</Label>
                            <Input type = "text"
                                   onChangeText={(user) => this.setState({user})}
                                   value = {this.state.user}/>
                        </Item>
                        <Item floatingLabel>
                            <Label>Contraseña</Label>
                            <Input type = "text"
                                   onChangeText={(pass) => this.setState({pass})}
                                   value = {this.state.pass}/>
                        </Item>
                    </Form>
                    <Button onPress={() => this.acceder()} block>
                        <Text>Login</Text>
                    </Button>
                    <Button onPress={() => this.props.navigation.navigate('newuser')} block>
                        <Text>Registrarse</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const estilos = StyleSheet.create({
    container:{
    backgroundColor: '#263238',

    },
    foreground: {
        backgroundColor: '#4182AA',
        paddingBottom: 20,
    },
});