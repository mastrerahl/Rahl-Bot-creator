// app.js
import { auth, db } from './firebase-config.js';
import { onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const botForm = document.getElementById("botForm");

botForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const botName = document.getElementById("botName").value.trim();
  const sessionID = document.getElementById("sessionID").value.trim();
  const ownerNumber = document.getElementById("ownerNumber").value.trim();
  const prefix = document.getElementById("prefix").value.trim();

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      try {
        await addDoc(collection(db, "bots"), {
          userId: user.uid,
          botName,
          sessionID,
          ownerNumber,
          prefix,
          createdAt: Timestamp.now()
        });

        alert("✅ Bot configuration saved!");
        botForm.reset();
      } catch (err) {
        console.error("❌ Error saving bot:", err);
        alert("Failed to save. Try again.");
      }
    } else {
      alert("Please log in first.");
    }
  });
});
