
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Container, Header, Form, Footer, Item, Label, Input, FooterTab, Icon, Title, Button, Content, Left, Body, Right} from 'native-base';
import * as firebase from 'firebase';
import Firebase from "./Firebase";

export default class Login extends React.Component {

    constructor (){
        super()
        this.state = {
            user: "",
            pass: ""
        }
        Firebase.initialize();
    }

    componentWillMount(){

        if(!firebase.apps.length){
            firebase.initializeApp();
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
    footertext:{

      color: '#deff7c',
    },
    container:{
    backgroundColor: '#263238',

    },
    foreground: {
        backgroundColor: '#4182AA',
        paddingBottom: 20,
    },
});