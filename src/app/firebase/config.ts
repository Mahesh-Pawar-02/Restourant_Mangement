// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf03b7PLkYixy1SXaVSodTCB8cdG6WVDU",
  authDomain: "resto-app-6291b.firebaseapp.com",
  projectId: "resto-app-6291b",
  storageBucket: "resto-app-6291b.appspot.com",
  messagingSenderId: "513353084232",
  appId: "1:513353084232:web:d55ba5588f3a22ccf6d77d",
  measurementId: "G-9RJ6FL7M9H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);