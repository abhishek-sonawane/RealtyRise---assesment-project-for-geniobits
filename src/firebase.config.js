// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY69LEEWWBybkFMkVwDRgrDW4cvp9M_gU",
  authDomain: "house-marketplace-b335e.firebaseapp.com",
  projectId: "house-marketplace-b335e",
  storageBucket: "house-marketplace-b335e.appspot.com",
  messagingSenderId: "508616363609",
  appId: "1:508616363609:web:9775cc1c8bd31974f82b48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore()