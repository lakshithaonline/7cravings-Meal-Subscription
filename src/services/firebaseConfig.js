import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAr2sTDhwIVvndzmY-g7jr-le3hw1WWo_Q",
    authDomain: "cravings-3abb3.firebaseapp.com",
    projectId: "cravings-3abb3",
    storageBucket: "cravings-3abb3.appspot.com",
    messagingSenderId: "987816101665",
    appId: "1:987816101665:web:98af517a0dfdad3c332060"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };