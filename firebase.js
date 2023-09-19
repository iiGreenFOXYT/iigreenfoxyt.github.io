// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCb7RLktQ4nY0aYxX-O8ieJyp8E0L4i0dA",
  authDomain: "portofliogreen.firebaseapp.com",
  projectId: "portofliogreen",
  storageBucket: "portofliogreen.appspot.com",
  messagingSenderId: "882945109924",
  appId: "1:882945109924:web:31468689af79e062275b31",
  measurementId: "G-BQ21S0YQHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);