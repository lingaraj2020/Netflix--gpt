
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwVzz72Ltg2pd8NHETiRItZN_D6lzLC0o",
  authDomain: "netflixgpt-90823.firebaseapp.com",
  projectId: "netflixgpt-90823",
  storageBucket: "netflixgpt-90823.appspot.com",
  messagingSenderId: "59782431203",
  appId: "1:59782431203:web:2a4e1d85649105615520d6",
  measurementId: "G-ZYYBWGSGHR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth=getAuth();

