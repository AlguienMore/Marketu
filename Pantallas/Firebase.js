import * as firebase from "firebase";

class Firebase {
    static initialize() {
        firebase.initializeApp({
            apiKey: "AIzaSyCzDXmy53FGtSAdK1N5KFeouz5E5VzdyJ8",
            authDomain: "marketu-713b9.firebaseapp.com",
            databaseURL: "https://marketu-713b9.firebaseio.com",
            projectId: "marketu-713b9",
            storageBucket: "marketu-713b9.appspot.com",
            messagingSenderId: "466641196532"
        });
    }

    static getRef() {
        return firebase.database().ref();
    }

    static getAuth() {
        return firebase.auth();
    }

    static getUid() {
        var user = firebase.auth().currentUser;
        return user.uid;
    }

    static getCurrentEmail() {
        var user = firebase.auth().currentUser;
        return user.email;
    }
}

module.exports = Firebase;