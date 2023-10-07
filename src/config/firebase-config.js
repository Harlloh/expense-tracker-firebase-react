// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_RAPID_API_KEY,
  apiKey: "AIzaSyAjEPhTmpe5amIniMnoM2CAQXAGrMk_6ik",
  authDomain: "expense-tracker-95469.firebaseapp.com",
  projectId: "expense-tracker-95469",
  storageBucket: "expense-tracker-95469.appspot.com",
  messagingSenderId: "206794379555",
  appId: "1:206794379555:web:b6f029b95b8ca5e0983c96",
  measurementId: "G-BZ1EJ64CPQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// firebase login
// firebase init
// firebase deploy
