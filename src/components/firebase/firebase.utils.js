import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBO6ujuJDMY88ImeDS7yZxCF2iXD4pGS8s",
    authDomain: "ecommerce-db-aa949.firebaseapp.com",
    databaseURL: "https://ecommerce-db-aa949.firebaseio.com",
    projectId: "ecommerce-db-aa949",
    storageBucket: "",
    messagingSenderId: "562117182090",
    appId: "1:562117182090:web:71053b3cab19ff025a2373"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;