// Signup
async function signup(event) {
  event.preventDefault();
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  try {
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCred.user;
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      coins: 20,
      createdAt: Date.now()
    });
    alert("Signup successful!");
    window.location.href = "dashboard.html";
  } catch (err) {
    alert(err.message);
  }
}

// Login
async function login(event) {
  event.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful!");
    window.location.href = "dashboard.html";
  } catch (err) {
    alert("Login failed: " + err.message);
  }
}
