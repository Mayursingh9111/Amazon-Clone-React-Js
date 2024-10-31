// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "process.env.firebase_api_key",
  authDomain: "login-practice-70db0.firebaseapp.com",
  projectId: "login-practice-70db0",
  storageBucket: "login-practice-70db0.appspot.com",
  messagingSenderId: "365283923558",
  appId: "1:365283923558:web:ed49f2e345c8ef5ddaffa7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
