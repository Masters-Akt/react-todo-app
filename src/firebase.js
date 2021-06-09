import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCO_XFasdoWaNZVvsP8CJREe12MY3X-wyI",
    authDomain: "react-todo-6d166.firebaseapp.com",
    projectId: "react-todo-6d166",
    storageBucket: "react-todo-6d166.appspot.com",
    messagingSenderId: "205247807976",
    appId: "1:205247807976:web:abafd37b2738275c44e45d",
    measurementId: "G-0N06VQK27R"
});

const db = firebaseApp.firestore();

export default db;