import React from 'react'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { collection, addDoc, getDocs } from "firebase/firestore";


export const initializeFirebase = () => {
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
}

export const initializeFirestoreDB = async () => {

    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);

    try {
        const querySnapshot = await getDocs(collection(db, "coupoll_votes"));
        querySnapshot.forEach((doc) => {
            // console.log(`${doc.id} => ${doc.data()}`);
            const data = doc.data()
            return (data)

        });

    } catch (e) {
        console.error("Error adding document: ", e);
    }

}

