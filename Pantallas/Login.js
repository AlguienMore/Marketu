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
            user: null,
            pass: null
        }
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
                            <Label>Nombre de Usuario</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label>Contraseña</Label>
                            <Input />
                        </Item>
                    </Form>
                    <Button onPress={() => this.props.navigation.navigate('menu')} block>
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