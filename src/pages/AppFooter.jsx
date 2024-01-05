// Footer.js

import React from "react";

const Footer = () => {
  return (
    // ========== FOOTER ==========
    <footer className="container py-4">
      <div className="row align-items-md-center text-center text-md-start">
        <div className="col-md mb-3 mb-md-0">
          <p className="fs-5 mb-0">© Ismael Cardenas G. 2023.</p>
        </div>

        <div className="col-md d-md-flex justify-content-md-end">
          {/* Socials */}
          <ul className="list-inline mb-0">
            <li className="list-inline-item">
              <a
                className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle"
                target="_blank"
                href="https://www.facebook.com/mi.enfermera.399"
              >
                <i className="bi-facebook"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle"
                target="_blank"
                href="https://github.com/IsmlCg/horse-and-breeder"
              >
                <i className="bi-github"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle"
                target="_blank"
                href="#"
              >
                <i className="bi-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="btn btn-icon btn-sm btn-ghost-secondary rounded-circle"
                target="_blank"
                href="#"
              >
                <i className="bi-slack"></i>
              </a>
            </li>
          </ul>
          {/* {End Socials } */}
        </div>
      </div>
    </footer>
    // ========== END FOOTER ==========
  );
};

export default Footer;
