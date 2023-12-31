// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import {getFirestore,collection, addDoc} from "firebase/firestore"
import  ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCauzizemrtoXQpLkQbRFXhu1ZXmgWuwMY",
  authDomain: "task-app-2c104.firebaseapp.com",
  projectId: "task-app-2c104",
  storageBucket: "task-app-2c104.appspot.com",
  messagingSenderId: "499827849198",
  appId: "1:499827849198:web:d571bb71da33267bd000ff",
  measurementId: "G-Y697YMGMBY"
};

// Initialize Firebase

const firebase = initializeApp(firebaseConfig);
const auths = initializeAuth(firebase, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)})
const database = getFirestore(firebase)
export {auths, firebase, database, collection, addDoc}