// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA6azGd5Qxi4uGETvBzqM-2NMH8BGsB0V0",
  authDomain: "rahl-bot-creator-ef6f5.firebaseapp.com",
  projectId: "rahl-bot-creator-ef6f5",
  storageBucket: "rahl-bot-creator-ef6f5.firebasestorage.app",
  messagingSenderId: "110560348909",
  appId: "1:110560348909:web:953f4ca7f46312c0041ae4",
  measurementId: "G-MDS0MEGKHD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };
