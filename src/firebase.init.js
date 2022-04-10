// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// firebase tool (npm install -g firebase-tools) 
// firebase login (firebase login)
// firebase init (firebase init)
// firebase depoy (firebase deploy)
const firebaseConfig = {
  apiKey: "AIzaSyBDPgNZaj1WHHKrCt0_WXa8YAvycEz4eQQ",
  authDomain: "simple-main-d3c4e.firebaseapp.com",
  projectId: "simple-main-d3c4e",
  storageBucket: "simple-main-d3c4e.appspot.com",
  messagingSenderId: "297383560666",
  appId: "1:297383560666:web:f64d4d557a87cf43b82ce3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export default auth;