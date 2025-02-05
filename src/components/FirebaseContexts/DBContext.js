import React, { useContext, useState, useEffect } from "react";
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, getDocs, getDoc, doc, setDoc, updateDoc } from "firebase/firestore";



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

const db = getFirestore(app);

const DBContext = React.createContext(null);

export const useDB = () => {
    return useContext(DBContext);
}

export const DBProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    const fetchRSVP = async (lastname) => {
        const docRef = doc(db, "rsvp", lastname);
        const docSnap = await getDoc(docRef);
        const userData = docSnap.data();

        return userData;
    }

    const updateRSVP = async (lastname, data) => {
        const docRef = doc(db, "rsvp", lastname);
        await updateDoc(docRef, data);
    }

    return (
        <DBContext.Provider value={{ data, setData, loading, fetchRSVP, updateRSVP }}>
            {children}
        </DBContext.Provider>
    )
}

