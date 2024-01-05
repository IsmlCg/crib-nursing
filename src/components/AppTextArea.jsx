import React, { useState } from "react";
import { Form } from "react-bootstrap";

const AppTextArea = ({ initTextArea, onTextareaChange }) => {
  const { fromGroupId, name, placeholder, textLabel, textVal, id } =
    initTextArea;
  const [textareaValue, setTextareaValue] = useState(textVal);
  const handleTextAreaChange = (e) => {
    setTextareaValue(e.target.value);
    onTextareaChange(e);
  };
  return (
    <Form.Group id={fromGroupId}>
      <Form.Label>{textLabel}</Form.Label>
      <Form.Control
        as="textarea"
        rows={3}
        name={name}
        value={textareaValue}
        id={id}
        placeholder={placeholder}
        onChange={handleTextAreaChange}
        required
      />
    </Form.Group>
  );
};

export default AppTextArea;
