// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-87c13.firebaseapp.com",
  projectId: "real-estate-87c13",
  storageBucket: "real-estate-87c13.appspot.com",
  messagingSenderId: "131511299314",
  appId: "1:131511299314:web:90b043eb6229b88ae6f46b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);