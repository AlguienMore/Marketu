import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text
} from 'react-native';
import {
    Container,
    Header,
    Right,
    Footer,
    FooterTab,
    Title,
    Button,
    Content,
    Left,
    Body,
    Drawer
} from 'native-base';
import Homepage from "./HomePages/Homepage";
import Searchpage from "./HomePages/Searchpage";
import Buypage from "./HomePages/Buypage";
import Profilepage from "./HomePages/Profilepage";
import Icon from 'react-native-vector-icons/FontAwesome';

//type Props = {};

export default class Menu extends React.Component {
    constructor(props){
        super(props)
        this.state = {index: 0}
    }

    switchScreen(index){
        this.setState({index: index})
    }

    /*switchTheme(){


    }*/
    render() {
        let ComponenteTest = null;
        let headernamebaby = null;
        let colorThemeActivated = false;
        let stylos = null;
        if(colorThemeActivated){
            stylos = "True"

        }else{
            stylos = "False"
        }

        if (this.state.index == 0){
            ComponenteTest = Homepage
            headernamebaby = "Pagina de Inicio"
        }else if(this.state.index == 1){
            ComponenteTest = Searchpage
            headernamebaby = "Busqueda"
        }else if (this.state.index== 2){
            ComponenteTest = Buypage
            headernamebaby = "Comprar"
        }else {
            ComponenteTest = Profilepage
            headernamebaby = "Perfil"
        }

        return (
            <Container contentContainerStyle={styles.contentContainer}>
                <Header androidStatusBarColor={'#335d7d'} style={styles.foreground} noLeft>
                    <Left/>
                    <Body>
                    <Title>{headernamebaby}</Title>
                    </Body>
                    <Right>
                        <Button onPress={() => this.props.navigation.goBack()} transparent>
                            <Icon name='sign-out' size={30} color='#fff'/>

                        </Button>
                    </Right>
                </Header>
                <Content style={styles.container}>
                    <ComponenteTest/>

                </Content>
                <Footer>
                    <FooterTab style={styles.foreground}>
                        <Button onPress={() => this.switchScreen(0)}>
                            <Text style={styles.textoresaltar}>
                                Inicio
                            </Text>
                        </Button>
                        <Button onPress={() => this.switchScreen(1)}>
                            <Text style={styles.textoresaltar}>
                                Buscar
                            </Text>
                        </Button>
                        <Button onPress={() => this.switchScreen(2)}>
                            <Text style={styles.textoresaltar}>
                                Comprar
                            </Text>
                        </Button>
                        <Button onPress={() => this.switchScreen(3)}>
                            <Text style={styles.textoresaltar}>
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
        color: '#f7f0e9',
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

const estilotest = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        backgroundColor: '#fff',
    },

});

//const headernamebaby = "Hi";