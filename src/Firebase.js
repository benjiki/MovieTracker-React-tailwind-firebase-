// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfsE61NxXWMoGQeYcBiOrDA_taSvF4h1w",
  authDomain: "dagimovies.firebaseapp.com",
  projectId: "dagimovies",
  storageBucket: "dagimovies.appspot.com",
  messagingSenderId: "40799247321",
  appId: "1:40799247321:web:48514325c45250b98dd7c8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
