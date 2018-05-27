/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import {createStackNavigator} from 'react-navigation';


import Menu from './Pantallas/Menu';
import Login from './Pantallas/Login';
import NewUser from './Pantallas/NewUser';

export default class App extends React.Component {
    render() {

        return <Navegador/>;
    }
}

const Navegador = createStackNavigator(
    {

        login: Login,
        menu: Menu,
        newuser: NewUser,

    },
    {
        headerMode: 'none',
        initialRouteName: 'login',
    });




