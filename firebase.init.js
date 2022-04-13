import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsTEx3fD2rm22orgfIptFc7aySvdtta0A",
  authDomain: "genius-car-service-30e1b.firebaseapp.com",
  projectId: "genius-car-service-30e1b",
  storageBucket: "genius-car-service-30e1b.appspot.com",
  messagingSenderId: "405511975082",
  appId: "1:405511975082:web:e8b6a027fa98adbcb3e0d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;