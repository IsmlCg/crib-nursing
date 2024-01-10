import React from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import { FaFacebook, FaGithub, FaTwitter, FaSlack } from "react-icons/fa";

const Footer = () => {
  return (
    // ========== FOOTER ==========
    <footer>
      <Row className="align-items-md-center text-center text-md-start">
        <Col md>
          <p className="fs-5 mb-0">© Ismael Cardenas G. 2023.</p>
        </Col>

        <Col md="" className="d-md-flex justify-content-md-end">
          {/* Socials */}
          <ListGroup horizontal>
            <ListGroup.Item className="">
              <a
                className="btn btn-ghost-secondary rounded-circle"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/mi.enfermera.399"
              >
                <FaFacebook />
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a
                className="btn btn-ghost-secondary rounded-circle"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/IsmlCg/horse-and-breeder"
              >
                <FaGithub />
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a
                className="btn btn-ghost-secondary rounded-circle"
                target="_blank"
                rel="noopener noreferrer"
                href="#"
              >
                <FaTwitter />
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a
                className="btn btn-ghost-secondary rounded-circle"
                target="_blank"
                rel="noopener noreferrer"
                href="#"
              >
                <FaSlack />
              </a>
            </ListGroup.Item>
          </ListGroup>
          {/* {End Socials } */}
        </Col>
      </Row>
    </footer>
    // ========== END FOOTER ==========
  );
};

export default Footer;
