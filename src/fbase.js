// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZm80qZt3ttrDzFxEUDjgE6f2UwU2aAtY",
  authDomain: "nwitter-668ab.firebaseapp.com",
  projectId: "nwitter-668ab",
  storageBucket: "nwitter-668ab.appspot.com",
  messagingSenderId: "754870455850",
  appId: "1:754870455850:web:f17e4cbaa420c1b0ad3d53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore();


export default app;
