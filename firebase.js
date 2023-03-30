// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfhRUkI0eeAs9YiAKUd1Z4tDUafI3jbp0",
  authDomain: "personal-website-e1e4c.firebaseapp.com",
  projectId: "personal-website-e1e4c",
  storageBucket: "personal-website-e1e4c.appspot.com",
  messagingSenderId: "1067002641079",
  appId: "your-app-id",
  measurementId: "1:1067002641079:web:cdb9bf0a48d97af82aeb32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
