// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHBI-c4YhkDZ1G3-9sto1-dsQHROZxhAM",
  authDomain: "genius-car-service-5bf3b.firebaseapp.com",
  projectId: "genius-car-service-5bf3b",
  storageBucket: "genius-car-service-5bf3b.appspot.com",
  messagingSenderId: "965634618080",
  appId: "1:965634618080:web:8c153d2d6e1a12cee71685"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;