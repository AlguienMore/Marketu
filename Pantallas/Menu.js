import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text
} from 'react-native';
import {Container, Header, Right, Footer, FooterTab, Icon, Title, Button, Content, Left, Body} from 'native-base';
import Homepage from "./HomePages/Homepage";
import Searchpage from "./HomePages/Searchpage";
import Buypage from "./HomePages/Buypage";
import Profilepage from "./HomePages/Profilepage";

type Props = {};

export default class Menu extends Component<Props> {
    constructor(props){
        super(props)
        this.state = {index: 0}
    }

    switchScreen(index){
        this.setState({index: index})
    }
    render() {
        let ComponenteTest = null;

        if (this.state.index == 0){
            ComponenteTest = Homepage
        }else if(this.state.index == 1){
            ComponenteTest = Searchpage
        }else if (this.state.index== 2){
            ComponenteTest = Buypage
        }else {
            ComponenteTest = Profilepage
        }

        return (
            <Container contentContainerStyle={styles.contentContainer}>
                <Header androidStatusBarColor={'#3f678f'} style={styles.foreground}>
                    <Left>
                        <Button onPress={() => this.props.navigation.goBack()} transparent>
                            <Icon name='arrow-back'/>

                        </Button>
                    </Left>
                    <Body>
                    <Title>{headernamebaby}</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content style={styles.container}>
                    <ComponenteTest/>
                </Content>
                <Footer>
                    <FooterTab style={styles.foreground}>
                        <Button onPress={() => this.switchScreen(0)}>
                            <Text>
                                Inicio
                            </Text>
                        </Button>
                        <Button onPress={() => this.switchScreen(1)}>
                            <Text>
                                Buscar
                            </Text>
                        </Button>
                        <Button onPress={() => this.switchScreen(2)}>
                            <Text>
                                Comprar
                            </Text>
                        </Button>
                        <Button onPress={() => this.switchScreen(3)}>
                            <Text>
                                Perfil
                            </Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        backgroundColor: '#263238',
    },
    contentContainer:{
        alignItems: 'center',

    },
    foreground: {
        backgroundColor: '#4182AA',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#c6383b',
    },
    instructions: {
        textAlign: 'center',
        color: '#7a8a90',
        marginBottom: 5,
    },
    textoresaltar: {
        textAlign: 'center',
        color: '#bed2d8',

    },
    textoresalt: {
        textAlign: 'center',
        color: '#A2B3B9',
        marginBottom: 4,
    }
});

const headernamebaby = "Hi";