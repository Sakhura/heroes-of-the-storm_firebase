import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// conf general o base

const firebaseConfig = {
    apiKey: "AIzaSyB8j8s8s8s8s8s",
    authDomain: "authdomain.firebaseapp.com",
    projectId: "projectid",
    storageBucket: "storagebucket.appspot.com",
    messagingSenderId: "messagingSenderId",
    appId: "appid"
};

const auth = getAuth(FirebaseApp);
const db = getFirestore(FirebaseApp);

//inicializar el firebase
const FirebaseApp = initializeApp(firebaseConfig);

export { FirebaseApp, auth, db };



