import React from "react";
import { connect } from "react-redux";
import { Form, Col, Button } from "react-bootstrap";
import SharedFields from "./SharedFields";
import dashboardFormHook from "hooks/dashboardFormHook";
import { limitersubutialState } from "./constants";
import { NEW_LIMITERS, EDIT_LIMITERS } from "actions/types";
import { newOredit } from "actions/products";

const RfLimiterFormFields = ({ edit, history, newOredit, product }) => {
  const reducerType = edit ? EDIT_LIMITERS : NEW_LIMITERS;
  const [onChange, onSubmit, formData] = dashboardFormHook(
    limitersubutialState,
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
        <Form.Group as={Col} md="3" controlId="limiterDescription">
          <Form.Label>Limiter Description</Form.Label>
          <Form.Control
            className={!edit ? "font__size-2" : null}
            type="text"
            name="limiterDescription"
            value={formData.limiterDescription}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="frequency">
          <Form.Label>Frequency (GHz)</Form.Label>
          <Form.Control
            className={!edit ? "font__size-2" : null}
            type="text"
            name="frequency"
            value={formData.frequency}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="inputPowerCw">
          <Form.Label>CW Input Power (dBm)</Form.Label>
          <Form.Control
            className={!edit ? "font__size-2" : null}
            type="text"
            name="inputPowerCw"
            value={formData.inputPowerCw}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="inputPowerPeak">
          <Form.Label>Peak Input Power (dBm)</Form.Label>
          <Form.Control
            className={!edit ? "font__size-2" : null}
            type="text"
            name="inputPowerPeak"
            value={formData.inputPowerPeak}
            onChange={onChange}
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="3" controlId="flatLeakage">
          <Form.Label>Flat Leakage Power (dBm)</Form.Label>
          <Form.Control
            className={!edit ? "font__size-2" : null}
            type="text"
            name="flatLeakage"
            value={formData.flatLeakage}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="spikeLeakage">
          <Form.Label>Spike Leakage (ergs)</Form.Label>
          <Form.Control
            className={!edit ? "font__size-2" : null}
            type="text"
            name="spikeLeakage"
            value={formData.spikeLeakage}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="recoveryTime">
          <Form.Label>Recovery Time (nsec)</Form.Label>
          <Form.Control
            className={!edit ? "font__size-2" : null}
            type="text"
            name="recoveryTime"
            value={formData.recoveryTime}
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

export default connect(null, { newOredit })(RfLimiterFormFields);
