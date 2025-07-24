import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const form = document.getElementById("auth-form");
const title = document.getElementById("form-title");
const toggleLink = document.getElementById("toggle-link");
const submitBtn = document.getElementById("submit-btn");

let isLogin = true;

toggleLink.addEventListener("click", (e) => {
  e.preventDefault();
  isLogin = !isLogin;
  title.textContent = isLogin ? "Login" : "Sign Up";
  submitBtn.textContent = isLogin ? "Login" : "Sign Up";
  toggleLink.textContent = isLogin ? "Sign Up" : "Login";
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = form.email.value;
  const password = form.password.value;

  try {
    if (isLogin) {
      await signInWithEmailAndPassword(auth, email, password);
    } else {
      await createUserWithEmailAndPassword(auth, email, password);
    }
    window.location.href = "dashboard.html";
  } catch (error) {
    alert("Error: " + error.message);
  }
});
