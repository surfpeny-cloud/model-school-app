// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-YsuCz5Jeb_9h61B2mDyXqv7KmWIzz_8",
  authDomain: "model-school-app-6d750.firebaseapp.com",
  projectId: "model-school-app-6d750",
  storageBucket: "model-school-app-6d750.firebasestorage.app",
  messagingSenderId: "332990568572",
  appId: "1:332990568572:web:2bdb202b097e1df11b11f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
