// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCXtKwD3bBNlTUkIXr-L0GGAtN3vSYeU6U", // ✅ New valid key
  authDomain: "rahl-bot-creator.firebaseapp.com",
  projectId: "rahl-bot-creator",
  storageBucket: "rahl-bot-creator.appspot.com",
  messagingSenderId: "141487789717",
  appId: "1:141487789717:web:5d04a92e2aa3f90fda1a8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
