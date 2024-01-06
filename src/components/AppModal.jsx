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
          <div className="d-flex justify-content-between content-space-t-1">
            <Button variant="light" onClick={onClose}>
              Close
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};
export default AppModal;
