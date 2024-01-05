import React from "react";
import { Button, Form, Modal, Row, Col } from "react-bootstrap";

const AppModal = ({ isHidden, onClose, handleSubmit, children }) => {
  if (!isHidden) return null;
  return (
    <Modal show={isHidden} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Translations</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {children}
          <Button variant="light" onClick={onClose}>
            Close
          </Button>
          <Button className="float-end" type="submit">
            Save
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};
export default AppModal;
