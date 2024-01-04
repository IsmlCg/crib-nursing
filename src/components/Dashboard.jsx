// Dashboard.js
import React from "react";
import "./../App.css";
import Menu from "./Menu";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <>
      <Menu />
      <div className="container content-space-t-1 content-space-lg-1 content-space-b-1">
        <div className="d-grid gap-3">
          <Link className="card" to="../job-role-overview">
            <div className="card-body">
              <div className="row">
                <div className="col-md-4 mb-2 mb-md-0">
                  <span className="h6">Sales Account 1111</span>
                </div>

                <div className="col-sm-5 col-md-2 mb-2 mb-sm-0">
                  <span className="text-body">lll</span>
                </div>

                <div className="col-sm-5 col-md-4 mb-2 mb-sm-0">
                  <span className="text-body">Software Development</span>
                </div>

                <div className="col-sm-2 text-sm-end">
                  <span className="link link-pointer">Apply</span>
                </div>
              </div>
            </div>
          </Link>

          <Link className="card" to="../job-role-overview">
            <div className="card-body">
              <div className="row">
                <div className="col-md-4 mb-2 mb-md-0">
                  <span className="h6">Sales Account Executive</span>
                </div>

                <div className="col-sm-5 col-md-2 mb-2 mb-sm-0">
                  <span className="text-body">London</span>
                </div>

                <div className="col-sm-5 col-md-4 mb-2 mb-sm-0">
                  <span className="text-body">Software Development</span>
                </div>

                <div className="col-sm-2 text-sm-end">
                  <span className="link link-pointer">Apply</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
