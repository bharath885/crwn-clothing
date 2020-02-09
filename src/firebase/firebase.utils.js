import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBRXSr-pBv65-fzbm8OQfPufBL1tkYAgh8",
    authDomain: "crwn-db-90506.firebaseapp.com",
    databaseURL: "https://crwn-db-90506.firebaseio.com",
    projectId: "crwn-db-90506",
    storageBucket: "crwn-db-90506.appspot.com",
    messagingSenderId: "1098023151472",
    appId: "1:1098023151472:web:1f4bebd2fc3c0421ac11b5",
    measurementId: "G-PTLSDW5LLT"
};


firebase.initializeApp(config);

export const auth = firebase.auth(); //used for authentication
export const firestore= firebase.firestore();

//used for google authentication
const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'}); //google auth request for popup and sign in operations
export const SignInWithGoogle= ()=> auth.signInWithPopup(provider);


export default firebase;


