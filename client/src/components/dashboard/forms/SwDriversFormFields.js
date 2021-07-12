import React from "react";
import { connect } from "react-redux";
import { Form, Col, Button } from "react-bootstrap";
import SharedFields from "./SharedFields";
import dashboardFormHook from "hooks/dashboardFormHook";
import { swDriversInitialState } from "./constants";
import { NEW_SW_DRIVERS, EDIT_SW_DRIVERS } from "actions/types";
import { newOredit } from "actions/products";

const SwDriversFormFields = ({ edit, history, newOredit, product }) => {
  const reducerType = edit ? EDIT_SW_DRIVERS : NEW_SW_DRIVERS;
  const [onChange, onSubmit, formData] = dashboardFormHook(
    swDriversInitialState,
    reducerType,
    edit,
    history,
    newOredit,
    product
  );
  return (
    <Form
      className={!edit ? "u-margin-top-3 u-padding--1" : null}
      onSubmit={onSubmit}
    >
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="content">
          <Form.Label>Description Table</Form.Label>
          <Form.Control
            className={!edit ? "font__size-2" : null}
            type="text"
            name="content"
            value={formData.content}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="control">
          <Form.Label>Control</Form.Label>
          <Form.Control
            className={!edit ? "font__size-2" : null}
            type="text"
            name="control"
            value={formData.control}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="voltage1">
          <Form.Label>Voltage 1</Form.Label>
          <Form.Control
            className={!edit ? "font__size-2" : null}
            type="text"
            name="voltage1"
            value={formData.voltage1}
            onChange={onChange}
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="voltage2">
          <Form.Label>Voltage 2</Form.Label>
          <Form.Control
            className={!edit ? "font__size-2" : null}
            type="text"
            name="voltage2"
            value={formData.voltage2}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="sinkMa">
          <Form.Label>Sink mA</Form.Label>
          <Form.Control
            className={!edit ? "font__size-2" : null}
            type="text"
            name="sinkMa"
            value={formData.sinkMa}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="sourceMa">
          <Form.Label>Source mA</Form.Label>
          <Form.Control
            className={!edit ? "font__size-2" : null}
            type="text"
            name="sourceMa"
            value={formData.sourceMa}
            onChange={onChange}
          />
        </Form.Group>
      </Form.Row>
      <SharedFields onChange={onChange} edit={edit} formData={formData} />
      <div className="form__button-box u-margin-top-3">
        <Button
          className="u-margin-top-small rfu_button w-40 font__size-2"
          type="submit"
        >
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default connect(null, { newOredit })(SwDriversFormFields);
