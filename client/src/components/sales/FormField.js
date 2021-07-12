import React from "react";
import { Form } from "react-bootstrap";

const FormField = ({ handleChange }) => {
  return (
    <Form.Group>
      <Form.Control onChange={handleChange} as="select" size="lg">
        <option>Select Continent</option>
        <option>Asia</option>
        <option>India</option>
        <option>South Africa</option>
        <option>EMEA</option>
        <option>North America</option>
        <option>Russia & CIS</option>
        <option>Australia & New Zealand</option>
      </Form.Control>
    </Form.Group>
  );
};

export default FormField;
