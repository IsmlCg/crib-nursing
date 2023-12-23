import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "../firebase.js";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import googleIcon from "./../../assets/google-icon.svg";
import wave from "./../../assets/wave-pattern.svg";
async function getUserById(userId) {
  try {
    const usersCollection = collection(firestore, "users");
    // Create a query to get users with a specific role
    const q = query(usersCollection, where("uid", "==", userId));

    // Execute the query
    const querySnapshot = await getDocs(q);
    // Extract data from the query result
    // Check if the query returned any documents
    if (querySnapshot.size === 1) {
      // Extract data from the query result
      return querySnapshot.docs[0].data();
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching user by ID:", error.message);
    // Handle the error, e.g., show a message to the user
  }
}
const FormSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const userData = await getUserById(user.uid);
      // Assuming there is a 'role' property in your user object
      const userRole = userData.role;
      if (userRole === "admin") {
        setError("admin");
      } else if (userRole === "employee") {
        redirectToDashboard();
      } else {
        setError("Invalid user role");
      }
    } catch (error) {
      setError("Please enter a valid email or password.");
    }
  };
  const redirectToDashboard = () => {
    // You can customize this function for your navigation needs
    navigate("/dashboard");
  };
  const containerStyle = {
    backgroundImage: `url(${wave})`,
  };
  return (
    <form className="js-validate needs-validation" onSubmit={handleSignIn}>
      <div className="text-center">
        <div className="mb-5">
          <h3 className="card-title">Welcome to your nursing community</h3>
        </div>

        <a className="btn btn-white btn-lg d-grid mb-4" href="#">
          <span className="d-flex justify-content-center align-items-center">
            <img
              src={googleIcon}
              className="avatar avatar-xss me-2"
              alt="React logo"
            />
            Log in with Google
          </span>
        </a>

        <span className="divider-center text-muted mb-4">OR</span>
      </div>

      <div className="mb-4">
        <label className="form-label" htmlFor="signinSrEmail">
          Your email
        </label>
        <input
          type="email"
          className="form-control form-control-lg"
          name="email"
          id="signinSrEmail"
          tabIndex="1"
          placeholder="email@address.com"
          aria-label="email@address.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <span className="invalid-feedback">
          Please enter a valid email address.
        </span>
      </div>

      <div className="mb-4">
        <label className="form-label" htmlFor="signupSrPassword" tabIndex="0">
          Password
        </label>

        <div className="input-group-merge">
          <input
            type="password"
            className="js-toggle-password form-control form-control-lg"
            name="password"
            id="signupSrPassword"
            placeholder="8+ characters required"
            aria-label="8+ characters required"
            required=""
            minLength="8"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p>{error}</p>}
        </div>
      </div>

      <div className="d-flex justify-content-end mb-4">
        <a className="form-label-link" href="./page-reset-password.html">
          Forgot Password?
        </a>
      </div>

      <div className="d-grid gap-4">
        <button type="submit" className="btn btn-primary btn-lg">
          Sign in
        </button>
        <p className="card-text text-muted">
          Don't have an account yet?{" "}
          <a className="link" href="./sign-up">
            Sign up here
          </a>
        </p>
      </div>
    </form>
  );
};

export default FormSignIn;
