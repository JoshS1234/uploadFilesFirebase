// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXnQXCSR_tZdwRMifAajSW7-D6F9ATxDw",
  authDomain: "snap3-81a1f.firebaseapp.com",
  projectId: "snap3-81a1f",
  storageBucket: "snap3-81a1f.appspot.com",
  messagingSenderId: "591286353521",
  appId: "1:591286353521:web:ded5b86e4e2bc5e0a225d0",
};

// Initialize Firebase
// let app;
// if (firebase.apps.length === 0) {
const app = initializeApp(firebaseConfig);
// } else {
// app = app();
// }

const auth = getAuth(app);

export { auth };
