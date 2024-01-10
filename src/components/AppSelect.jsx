import React, { useState } from "react";
import { InputGroup, Form } from "react-bootstrap";

const AppSelect = ({ initSelect, updateSelect }) => {
  const { id, name, options, selectLabel, selectVal } = initSelect;
  const [selectedOption, setSelectedOption] = useState(selectVal);
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    updateSelect(e);
  };
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text id={id}>{selectLabel}</InputGroup.Text>
      <Form.Select
        aria-label="Select options"
        value={selectedOption}
        name={name}
        required
        onChange={handleOptionChange}
        id={id}
      >
        <option value="" defaultValue>
          Choose...
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Form.Select>
    </InputGroup>
  );
};

export default AppSelect;
