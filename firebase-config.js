// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJiq27MLfPLOlg32xvrRN0BWLW8pL40Rw", // ✅ New API key
  authDomain: "rahl-bot-creator.firebaseapp.com",
  projectId: "rahl-bot-creator",
  storageBucket: "rahl-bot-creator.appspot.com", // ✅ Fixed .app to .appspot.com
  messagingSenderId: "831521028656",
  appId: "1:831521028656:web:0c34f2dae08eb406840bf5",
  measurementId: "G-54LG8T2S4Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
