import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyBwUhcYEse4DQIxrrgJTg8A5CZ2iIiagTs",

    authDomain: "crayonsmp.firebaseapp.com",

    projectId: "crayonsmp",

    storageBucket: "crayonsmp.firebasestorage.app",

    messagingSenderId: "73755281978",

    appId: "1:73755281978:web:0ba52aaa249cc391270303",

    measurementId: "G-4V48128FF0"

};



const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
