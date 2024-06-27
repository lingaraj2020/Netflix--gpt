// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDFiqnHH9GCedOFevaZgeEilvy1kAAhmk",
  authDomain: "netflix-gpt-47e08.firebaseapp.com",
  projectId: "netflix-gpt-47e08",
  storageBucket: "netflix-gpt-47e08.appspot.com",
  messagingSenderId: "1058206260293",
  appId: "1:1058206260293:web:964ce2a19741891619572c",
  measurementId: "G-L4QCFFH2L2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);