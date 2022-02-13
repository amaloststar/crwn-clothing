import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDV8P-bKemMxwr1SyPjOiJt6Nj-iYlitY8",
    authDomain: "crwn-db-552a5.firebaseapp.com",
    projectId: "crwn-db-552a5",
    storageBucket: "crwn-db-552a5.appspot.com",
    messagingSenderId: "807139060141",
    appId: "1:807139060141:web:efd09f32c0313c8ee51924",
    measurementId: "G-Q1L5WCC3VW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;