import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.js";
import { useNavigate } from "react-router-dom";

import logo from "./../../assets/logo.svg";
import googleIcon from "./../../assets/google-icon.svg";
import wave from "./../../assets/wave-pattern.svg";

const SignIn = () => {
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
      redirectToDashboard();
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
    <div className="d-flex align-items-center min-h-100 bg-dark">
      <div id="content" role="main" className="flex-grow-1 overflow-hidden">
        <div className="container content-space-t-1 content-space-b-2">
          <div className="mx-lg-auto">
            <div className="d-flex justify-content-center align-items-center flex-column min-vh-lg-100">
              <header
                id="header"
                className="navbar navbar-height navbar-light mb-3"
              >
                <div className="container">
                  <a className="navbar-brand mx-auto" href="./index.html">
                    <img
                      src={logo}
                      className="navbar-brand-logo"
                      alt="React logo"
                    />
                  </a>
                </div>
              </header>

              <div className="position-relative">
                <div className="card card-shadow card-login">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="card-body">
                        <form
                          className="js-validate needs-validation"
                          onSubmit={handleSignIn}
                        >
                          <div className="text-center">
                            <div className="mb-5">
                              <h3 className="card-title">Login to Unify</h3>
                            </div>

                            <a
                              className="btn btn-white btn-lg d-grid mb-4"
                              href="#"
                            >
                              <span className="d-flex justify-content-center align-items-center">
                                <img
                                  src={googleIcon}
                                  className="avatar avatar-xss me-2"
                                  alt="React logo"
                                />
                                Log in with Google
                              </span>
                            </a>

                            <span className="divider-center text-muted mb-4">
                              OR
                            </span>
                          </div>

                          <div className="mb-4">
                            <label
                              className="form-label"
                              htmlFor="signinSrEmail"
                            >
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
                            <label
                              className="form-label"
                              htmlFor="signupSrPassword"
                              tabIndex="0"
                            >
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
                            <a
                              className="form-label-link"
                              href="./page-reset-password.html"
                            >
                              Forgot Password?
                            </a>
                          </div>

                          <div className="d-grid gap-4">
                            <button
                              type="submit"
                              className="btn btn-primary btn-lg"
                            >
                              Sign in
                            </button>
                            <p className="card-text text-muted">
                              Don't have an account yet?{" "}
                              <a className="link" href="./page-signup.html">
                                Sign up here
                              </a>
                            </p>
                          </div>
                        </form>
                      </div>
                    </div>

                    <div
                      className="col-md-4 d-md-flex justify-content-center flex-column bg-soft-primary p-8 p-md-5"
                      style={containerStyle}
                    >
                      <h5 className="mb-4">Build digital products with:</h5>

                      <ul className="list-checked list-checked-primary list-py-2">
                        <li className="list-checked-item">All-in-one tool</li>
                        <li className="list-checked-item">
                          Easily add &amp; manage your services
                        </li>
                      </ul>

                      <span className="d-block">
                        <a className="link link-pointer" href="#">
                          Learn more
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
