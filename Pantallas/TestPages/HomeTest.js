import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text
} from 'react-native';
import {Container, Header, Right, Footer, FooterTab, Icon, Title, Button, Content, Left, Body} from 'native-base';

type Props = {};
export default class HomeTest extends Component<Props> {
    render() {
        return (
            <Container>
                <Header androidStatusBarColor={'#3f678f'} style={styles.foreground}>
                    <Left>
                        <Button onPress={() => this.props.navigation.goBack()} transparent>
                            <Icon name='arrow-back'/>

                        </Button>
                    </Left>
                    <Body>
                    <Title>Market U</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content style={styles.container}>
                    <Text style={styles.welcome}>
                        Warning
                    </Text>
                    <Text style={styles.textoresaltar}>
                        Texto Resaltado o con enfasis
                    </Text>
                    <Text style={styles.textoresalt}>
                        Texto resaltado segundo color
                    </Text>
                    <Text style={styles.instructions}>
                        Puto el que lo lea
                    </Text>
                    <Text style={styles.instructions}>
                        Descripcion de algo
                    </Text>

                </Content>
                <Footer>
                    <FooterTab style={styles.foreground}>
                        <Button>
                            <Text>
                                Inicio
                            </Text>
                        </Button>
                        <Button>
                            <Text>
                                Buscar
                            </Text>
                        </Button>
                        <Button>
                            <Text>
                                Comprar
                            </Text>
                        </Button>
                        <Button>
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