// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA2LxiZUeLk43oVjDT83pRGhTojcchRqj0",
    authDomain: "julianandcharmaine.firebaseapp.com",
    projectId: "julianandcharmaine",
    storageBucket: "julianandcharmaine.firebasestorage.app",
    messagingSenderId: "815452917055",
    appId: "1:815452917055:web:cb685b1bd32bb38c84d78a",
    measurementId: "G-JES4VTB41K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);