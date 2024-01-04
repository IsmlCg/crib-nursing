import React from "react";
import logo from "./../assets/logo-menu.svg";
import Menu from "./Menu";
import { Link } from "react-router-dom";
function JobRoleOverview() {
  return (
    <>
      <Menu />
      <div className="container content-space-1 content-space-b-lg-3">
        <div className="row mb-7">
          <div className="col-md mb-3 mb-md-0">
            <div className="mb-3">
              <Link className="link link-secondary" href="../dashboard">
                <i className="bi-arrow-left small me-1"></i> Back to Listings
              </Link>
            </div>

            <h1 className="mb-0">Product Manager</h1>
          </div>

          <div className="col-md-auto align-self-md-end">
            <a className="btn btn-primary" href="./page-careers-apply.html">
              Apply now
            </a>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 order-lg-2 mb-5 mb-lg-0">
            <div id="stickyBlockStartPoint">
              <div className="js-sticky-block card card-borderless bg-soft-dark">
                <div className="card-body">
                  <dl>
                    <dt>Application Deadline:</dt>
                    <dd>December 31, 2021</dd>
                    <dt>Department:</dt>
                    <dd>Product</dd>
                    <dt>Employment Type:</dt>
                    <dd>Full Time</dd>
                    <dt>Location:</dt>
                    <dd>Remote</dd>
                    <dt>Compensation:</dt>
                    <dd>£80,000 - £100,000 / year</dd>
                    <dt>Reporting To:</dt>
                    <dd>CEO</dd>
                  </dl>

                  <hr />

                  <h6>This role's hiring manager:</h6>

                  <div className="mb-3">
                    <img
                      src={logo}
                      className="navbar-brand-logo"
                      alt="React logo"
                    />
                  </div>

                  <h6>Louise Donadieu</h6>

                  <a className="link link-secondary link-pointer" href="#">
                    View Christina's Profile
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="mb-7">
              <p>Hello 👋</p>

              <p>I'm Christina-CEO here at Unify.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default JobRoleOverview;
