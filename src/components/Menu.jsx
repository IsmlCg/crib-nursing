import React from "react";
import logo from "./../assets/logo-menu.svg";
function Menu() {
  return (
    <header
      id="header"
      className="navbar navbar-expand-lg navbar-light bg-white"
    >
      <div className="container">
        <nav className="js-mega-menu navbar-nav-wrap">
          <a className="navbar-brand" href="./dashboard" aria-label="Unify">
            <img src={logo} className="navbar-brand-logo" alt="React logo" />
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-default">
              <i className="bi-list"></i>
            </span>
            <span className="navbar-toggler-toggled">
              <i className="bi-x"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav nav-pills">
              <li className="hs-has-mega-menu nav-item">
                <a
                  id="landingsMegaMenu"
                  className="hs-mega-menu-invoker nav-link "
                  aria-current="page"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Landings
                </a>
              </li>

              <li className="hs-has-mega-menu nav-item">
                <a
                  id="pagesMegaMenu"
                  className="hs-mega-menu-invoker nav-link "
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Pages
                </a>
              </li>

              <li className="hs-has-mega-menu nav-item">
                <a
                  id="blogMegaMenu"
                  className="hs-mega-menu-invoker nav-link "
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Blog
                </a>
              </li>

              <li className="hs-has-mega-menu nav-item">
                <a
                  id="docsMegaMenu"
                  className="hs-mega-menu-invoker nav-link "
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Docs
                </a>
              </li>

              <li className="nav-item ms-lg-auto">
                <a
                  className="btn btn-ghost-dark me-2 me-lg-0"
                  href="./page-login.html"
                >
                  Log in
                </a>
                <a className="btn btn-dark d-lg-none" href="./sign-up">
                  Sign up
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="btn btn-dark d-none d-lg-inline-block"
                  href="./sign-up"
                >
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
export default Menu;
