import React, { useState } from "react";
import logo from "../assets/logo.svg";
import wave from "../assets/wave-pattern.svg";
import FormSignIn from "./FormSignIn.jsx";
const SignIn = () => {
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
                      <div className="card-body">{/* <FormSignIn /> */}</div>
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
