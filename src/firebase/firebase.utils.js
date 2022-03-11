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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    console.log(additionalData);
    if (!userAuth)
        return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;

}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        console.log(obj);
        batch.set(newDocRef, obj);
    }    
    );
    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(
        doc => {
            const { title, items } = doc.data();
            return {
                routeName: encodeURI(title.toLowerCase()),
                id: doc.id,
                title, 
                items
            }
        }
    );
    console.log(transformedCollection);
    return transformedCollection.reduce(
        (accumulator, collection) => {
            accumulator[collection.title.toLowerCase()] = collection;
            return accumulator;
        },
        {}
    );
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;