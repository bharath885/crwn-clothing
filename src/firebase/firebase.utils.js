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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    //pass the user info i.e auth id
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    //if snap shot does not exists create a new user in database
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            //creates new fields in fire store database 
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch (error) {
            console.log("error creating user:" + error.message);
        }
    }

    return userRef;

}
firebase.initializeApp(config);

export const auth = firebase.auth(); //used for authentication
export const firestore = firebase.firestore();

//used for google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' }); //google auth request for popup and sign in operations
export const SignInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;


