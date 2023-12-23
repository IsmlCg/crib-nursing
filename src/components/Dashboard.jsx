// Dashboard.js
import React from "react";
import "./../App.css";
import Menu from "./Menu";
const Dashboard = () => {
  return (
    <>
      <Menu />
      <div className="container content-space-t-1 content-space-lg-1 content-space-b-1">
        <div className="d-grid gap-3">
          <a className="card" href="./job-role-overview">
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
          </a>

          <a className="card" href="./job-role-overview">
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
          </a>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
