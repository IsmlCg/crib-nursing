import React, { useState } from "react";
import { InputGroup, FormControl } from "react-bootstrap";

const AppInput = ({ initField, updateFieldValue }) => {
  const { fieldLabel, fieldValue, id, InputGroupId, name, type, placeholder } =
    initField;
  const [inputValue, setInputValue] = useState(fieldValue);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    updateFieldValue(e);
  };

  return (
    // ========== Input Group ==========
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {fieldLabel}
      </label>
      <InputGroup className="input-group-merge">
        <InputGroup.Text id={InputGroupId}>
          <i className="bi bi-person"></i>
        </InputGroup.Text>
        <FormControl
          aria-label={placeholder}
          aria-describedby={InputGroupId}
          id={id}
          required
          onChange={handleInputChange}
          placeholder={placeholder}
          type={type}
          name={name}
          value={inputValue}
        />
      </InputGroup>
    </div>

    // ========== End Input Group ==========
  );
};

export default AppInput;
