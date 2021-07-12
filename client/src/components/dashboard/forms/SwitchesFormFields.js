import React from "react";
import { connect } from "react-redux";
import { Form, Col, Button } from "react-bootstrap";
import SharedFields from "./SharedFields";
import { switchesInitialState } from "./constants";
import dashboardFormHook from "hooks/dashboardFormHook";
import { NEW_SWITCHES, EDIT_SWITCHES } from "actions/types";
import { newOredit } from "actions/products";

const SwitchesFormFields = ({ edit, history, newOredit, product }) => {
  const reducerType = edit ? EDIT_SWITCHES : NEW_SWITCHES;
  const [onChange, onSubmit, formData] = dashboardFormHook(
    switchesInitialState,
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
        <Form.Group as={Col} md="4" controlId="frequencyRange">
          <Form.Label>Frequency Range</Form.Label>
          <Form.Control
            className={!edit ? "font__size-2" : null}
            type="text"
            name="frequencyRange"
            value={formData.frequencyRange}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="switchTopology">
          <Form.Label>Switch Topology</Form.Label>
          <Form.Control
            className={!edit ? "font__size-2" : null}
            type="text"
            name="switchTopology"
            value={formData.switchTopology}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="averagePower">
          <Form.Label>Tx Average Power (CW)(dBm)</Form.Label>
          <Form.Control
            className={!edit ? "font__size-2" : null}
            type="text"
            name="averagePower"
            value={formData.averagePower}
            onChange={onChange}
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="peakPower">
          <Form.Label>Tx Peak Power(dBm)</Form.Label>
          <Form.Control
            className={!edit ? "font__size-2" : null}
            type="text"
            name="peakPower"
            value={formData.peakPower}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="iso">
          <Form.Label>ISO (dB)</Form.Label>
          <Form.Control
            className={!edit ? "font__size-2" : null}
            type="text"
            name="iso"
            value={formData.iso}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="ip3">
          <Form.Label>IP3 (dBm)</Form.Label>
          <Form.Control
            className={!edit ? "font__size-2" : null}
            type="text"
            name="ip3"
            value={formData.ip3}
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

export default connect(null, { newOredit })(SwitchesFormFields);
