import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjRKk-DZ0alzmq7zvCZVTOmuFjhmhmnO8",
  authDomain: "clone-76b54.firebaseapp.com",
  projectId: "clone-76b54",
  storageBucket: "clone-76b54.appspot.com",
  messagingSenderId: "758552234327",
  appId: "1:758552234327:web:d0b6d8719fc81a1ce19612",
  measurementId: "G-0M6K8WWH76"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};