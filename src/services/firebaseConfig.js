import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//replace the Firebase config 

const firebaseConfig = {
    apiKey: "XXXXXXXXXXXXXXXX",
    authDomain: "XXXXXXXXXXXXXX",
    projectId: "XXXXXXXXXXXXX",
    storageBucket: "XXXXXXXXXXXXXX",
    messagingSenderId: "XXXXXXXXXXXXXXXXX",
    appId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };
