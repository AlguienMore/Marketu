/*
            PLACEHOLDER CODE

 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Container, Header, Form, Footer, Item, Label, Input, FooterTab, Icon, Title, Button, Content, Left, Body, Right} from 'native-base';


export default class Login extends React.Component {
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