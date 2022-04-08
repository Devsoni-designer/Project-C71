import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR2q3dzEZNIV35_OYlxWvyreZgqPuHKEE",
  authDomain: "e-ride-9ffb7.firebaseapp.com",
  projectId: "e-ride-9ffb7",
  storageBucket: "e-ride-9ffb7.appspot.com",
  messagingSenderId: "95963188221",
  appId: "1:95963188221:web:30ffec98ea96a0bae0a794"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
