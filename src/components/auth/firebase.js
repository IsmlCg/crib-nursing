// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDO4KfilOWWrGWzR19htlxuNCD444KTnIM",
  authDomain: "crib-nursing.firebaseapp.com",
  databaseURL: "https://crib-nursing-default-rtdb.firebaseio.com",
  projectId: "crib-nursing",
  storageBucket: "crib-nursing.appspot.com",
  messagingSenderId: "517889890955",
  appId: "1:517889890955:web:a34cd687cc20d02344528e",
  measurementId: "G-TYT7TJX5ZG",
};
// console.log("runnnning");
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
