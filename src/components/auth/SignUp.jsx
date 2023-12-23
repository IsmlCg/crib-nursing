import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "../firebase"; // Adjust the path as needed
import { collection, addDoc } from "firebase/firestore";

async function RegisterUser(email, password) {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;
  // Add user data to Firestore
  const usersCollection = collection(firestore, "users");
  const newUserDoc = await addDoc(usersCollection, {
    uid: user.uid,
    email: user.email,
    role: "employee",
    // other user data...
  });
}
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      RegisterUser(email, password);
    } catch (error) {
      console.error("Signup error:", error.message);
    }
  };
  return (
    <div>
      <h2>Signup</h2>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default SignUp;
