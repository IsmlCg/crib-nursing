import React, { useState } from "react";
import { Form } from "react-bootstrap";

const AppFormInput = ({ initDivField, updateFieldValue }) => {
  const { fieldName, fieldValue, id, type, placeholder, divId } = initDivField;
  const [inputValue, setInputValue] = useState(fieldValue);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    const data = { id: id, val: e.target.value };
    updateFieldValue(data);
  };

  return (
    // ========== Input Group ==========
    <Form.Group controlId={id}>
      <Form.Label>{fieldName}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        name={fieldName}
        value={inputValue}
        onChange={handleInputChange}
      />
    </Form.Group>

    // ========== End Input Group ==========
  );
};

export default AppFormInput;
