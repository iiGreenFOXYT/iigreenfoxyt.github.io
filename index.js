import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore, collection, getDocs}from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAfhRUkI0eeAs9YiAKUd1Z4tDUafI3jbp0",
  authDomain: "personal-website-e1e4c.firebaseapp.com",
  projectId: "personal-website-e1e4c",
  storageBucket: "personal-website-e1e4c.appspot.com",
  messagingSenderId: "1067002641079",
  appId: "1:1067002641079:web:cdb9bf0a48d97af82aeb32",
  measurementId: "G-VTN4TWWMZ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore()

// collection ref 
const colRef = collection(db, 'Projects') 

//get collection data
getDocs(colRef)
    .then((snapshot) => {
        console.log(snapshot)}
        )