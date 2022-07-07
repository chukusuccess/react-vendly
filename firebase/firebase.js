// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCODTpsaHZv6lnXXS7X9VtNV-fUYx4TKb0",
  authDomain: "gora-cfb56.firebaseapp.com",
  projectId: "gora-cfb56",
  storageBucket: "gs://gora-cfb56.appspot.com",
  messagingSenderId: "64678586384",
  appId: "1:64678586384:web:4d4762b58f2074fcaa4295",
  measurementId: "G-9HVYSBHX7H"
};

// gora-cfb56.appspot.com

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const db = getFirestore()