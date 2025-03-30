// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuynxBdyLhwnK0QxKfaHq1w9T5bcg5NhU",
  authDomain: "pascual-b0683.firebaseapp.com",
  projectId: "pascual-b0683",
  storageBucket: "pascual-b0683.firebasestorage.app",
  messagingSenderId: "750412678509",
  appId: "1:750412678509:web:0b1391483bdb2c3fca4664",
  measurementId: "G-599J8ZN9FQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//const analytics = getAnalytics(app);
//comento analyutics porque es un backend

export { app, db };
