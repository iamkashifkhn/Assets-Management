import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyA9KxgsppnsmW9lzPpOPpNAtnNy_rqB-rM",
    authDomain: "assets-management-6cdf7.firebaseapp.com",
    databaseURL: "https://assets-management-6cdf7-default-rtdb.firebaseio.com",
    projectId: "assets-management-6cdf7",
    storageBucket: "assets-management-6cdf7.appspot.com",
    messagingSenderId: "933276350793",
    appId: "1:933276350793:web:d8c6213214d75de5564298",
    measurementId: "G-RG3CZFWX80"
  };

  const app = initializeApp(firebaseConfig);
  export const database = getDatabase(app);
  export const auth = getAuth(app)