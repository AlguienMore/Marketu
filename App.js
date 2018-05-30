/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import {createStackNavigator} from 'react-navigation';


import Welcome from './Pantallas/WelcomePage';
import Menu from './Pantallas/Menu';
import Login from './Pantallas/Login';
import NewUser from './Pantallas/NewUser';
//import Profilepage from './Pantallas/HomePages/Profilepage';

/*if (!firebase.apps.length){
    firebase.initializeApp({
        apiKey: "AIzaSyCzDXmy53FGtSAdK1N5KFeouz5E5VzdyJ8",
        authDomain: "marketu-713b9.firebaseapp.com",
        databaseURL: "https://marketu-713b9.firebaseio.com",
        projectId: "marketu-713b9",
        storageBucket: "marketu-713b9.appspot.com",
        messagingSenderId: "466641196532"});

}*/

export default class App extends React.Component {
    render() {

        return <Navegador/>;
    }
}

const Navegador = createStackNavigator(
    {
        welcomepage: Welcome,
        login: Login,
        menu: Menu,
        newuser: NewUser,
        //Perfil: Profilepage,
    },
    {
        headerMode: 'none',
        initialRouteName: 'welcomepage',
    });




