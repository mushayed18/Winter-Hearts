// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa6zIJi_6zoXFCQT8J2M_BWifuhZwXtjs",
  authDomain: "winter-hearts.firebaseapp.com",
  projectId: "winter-hearts",
  storageBucket: "winter-hearts.firebasestorage.app",
  messagingSenderId: "726904697760",
  appId: "1:726904697760:web:c38b2021cbdf763643eac5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);