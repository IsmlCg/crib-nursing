import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

const AppModal = ({ isHidden, onClose, handleSubmit, children }) => {
  if (!isHidden) return null;
  return (
    <Modal show={isHidden} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Translations</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={onClose}>
            Close
          </Button>
          <Button type="submit">Save</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
export default AppModal;
