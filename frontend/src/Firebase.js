import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDHts2UzsaEbQWYxI_Zp7kiradsjJwMceE",
  authDomain: "f1racing-8e051.firebaseapp.com",
  projectId: "f1racing-8e051",
  storageBucket: "f1racing-8e051.appspot.com",
  messagingSenderId: "273279587569",
  appId: "1:273279587569:web:8f651ca979b2f9a4b14550",
  measurementId: "G-832M0MG1FF",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
