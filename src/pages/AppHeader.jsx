import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { BiX } from "react-icons/bi";
import logo from "../assets/logo-menu.svg";

function Header() {
  return (
    <Navbar expand="lg" bg="white" variant="light">
      <Navbar.Brand href="./dashboard" aria-label="Unify">
        <img src={logo} className="navbar-brand-logo" alt="React logo" />
      </Navbar.Brand>
      <Navbar.Toggle
        className="navbar-toggler collapsed"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-default">
          <i className="bi-list"></i>
        </span>
        <span className="navbar-toggler-toggled">
          <BiX />
        </span>
      </Navbar.Toggle>

      <Navbar.Collapse id="navbarNavDropdown">
        <Nav className="navbar-nav-wrap">
          <Nav.Link href="./dashboard" role="button" aria-expanded="false">
            Jobs
          </Nav.Link>
          <Nav.Link href="./jobs" role="button" aria-expanded="false">
            Register job
          </Nav.Link>

          <Nav.Item className="ms-lg-auto">
            <Button
              variant="ghost-dark"
              className="me-2 me-lg-0"
              href="./sign-in"
            >
              Log in
            </Button>
            <Button variant="dark" className="d-lg-none" href="./sign-up">
              Sign up
            </Button>
          </Nav.Item>

          <Nav.Item>
            <Button
              variant="dark"
              className="d-none d-lg-inline-block"
              href="./sign-up"
            >
              Sign up
            </Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
