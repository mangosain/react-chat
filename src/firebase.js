import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const auth = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "chat-app-b7d04.firebaseapp.com",
    projectId: "chat-app-b7d04",
    storageBucket: "chat-app-b7d04.appspot.com",
    messagingSenderId: "85319858060",
    appId: "1:85319858060:web:46fb508a3cbccc861a08a9"
}).auth();