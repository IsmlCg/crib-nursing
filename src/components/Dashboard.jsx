// Dashboard.js
import React from "react";
import "./../App.css";
import logo from "./../assets/logo.svg";
import googleIcon from "./../assets/google-icon.svg";
import wave from "./../assets/wave-pattern.svg";
const Dashboard = () => {
  const containerStyle = {
    backgroundImage: `url(${wave})`,
  };
  return <div className="d-flex align-items-center min-h-100 bg-dark"></div>;
};

export default Dashboard;
