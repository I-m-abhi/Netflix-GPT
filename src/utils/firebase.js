// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbwUpbyCozivzWEx66bkUsUIK-a7D2CzU",
  authDomain: "netflixgpt-846a4.firebaseapp.com",
  projectId: "netflixgpt-846a4",
  storageBucket: "netflixgpt-846a4.firebasestorage.app",
  messagingSenderId: "978409344917",
  appId: "1:978409344917:web:fdde5134b82029b71e709c",
  measurementId: "G-Z5QBZ719K6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();