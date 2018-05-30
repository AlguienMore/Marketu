import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Container, Header, Form, Footer, Item, Label, Input, FooterTab, Icon, Title, Button, Content, Left, Body, Right} from 'native-base';
import * as firebase from 'firebase';

export default class NewUser extends React.Component {
    
    constructor (){
        super()
        this.state = {
          user: null,
          contraseña: null
        }
      }

    guardar_usuario(){
        if (this.state.user != null && this.state.contraseña != null){
            alert("Registro exitoso!!");
            firebase.auth().createUserWithEmailAndPassword(this.state.user, this.state.contraseña).catch(function(error){
                //si ocurre un error
                var errorCode = error.code;
                alert("ha ocurrido un error, recuerde usar una dirección correo electronico válida");
                var erorMessage = error.message;
                //...
            });
        }else{
            alert("No ha digitao ningún valor, intente de nuevo");
        }
        this.props.navigation.navigate('login');
    }

    render() {
        return (
            <Container style={estilos.container}>
                <Header>
                    <Left/>
                    <Body>
                    <Title>
                        Registrar un nuevo usuario
                    </Title>
                    </Body>
                    <Right/>
                </Header>

                <Content >
                    <Form>
                        <Item floatingLabel>
                            <Label>Digite Correo Electronico</Label>
                            <Input type = "text"
                                   onChangeText={(user) => this.setState({user})}
                            value = {this.state.user}/>
                        </Item>
                        <Item floatingLabel>
                            <Label>Digite la Contraseña</Label>
                            <Input type = "password"
                                   onChangeText={(contraseña) => this.setState({contraseña})}
                            value = {this.state.contraseña}/>
                        </Item>
                    </Form>
                    <Button onPress= {() => this.guardar_usuario()} block>
                        <Text>Registrar Usuario</Text>
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