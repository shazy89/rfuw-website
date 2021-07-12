import React from "react";
import { Form, Col } from "react-bootstrap";

const Same = ({
  handleChange,
  values,
  errors,
  touched,
  page,
  footer,
  contact
}) => {
  return (
    <>
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="frequencyRange">
          <Form.Label className={page === "Contact" ? contact : footer}>
            Frequency Range
          </Form.Label>
          <Form.Control
            className="font__size-2"
            type="text"
            name="frequencyRange"
            value={values.frequencyRange}
            onChange={handleChange}
            isValid={touched.frequencyRange && !errors.frequencyRange}
          />
          {errors.frequencyRange ? (
            <p className="font__size-1 form_input-danger">
              {" "}
              {errors.frequencyRange}{" "}
            </p>
          ) : (
            <Form.Control.Feedback className="form_input-success">
              Looks good!
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="peakPower">
          <Form.Label className={page === "Contact" ? contact : footer}>
            Peak Power
          </Form.Label>
          <Form.Control
            className="font__size-2"
            type="text"
            name="peakPower"
            value={values.peakPower}
            onChange={handleChange}
            isValid={touched.peakPower && !errors.peakPower}
          />
          {errors.peakPower ? (
            <p className="font__size-1 form_input-danger">
              {" "}
              {errors.peakPower}{" "}
            </p>
          ) : (
            <Form.Control.Feedback className="form_input-success">
              Looks good!
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="pulseWidth">
          <Form.Label className={page === "Contact" ? contact : footer}>
            Pulse Width
          </Form.Label>
          <Form.Control
            className="font__size-2"
            type="text"
            name="pulseWidth"
            value={values.pulseWidth}
            onChange={handleChange}
            isValid={touched.pulseWidth && !errors.pulseWidth}
          />
          {errors.pulseWidth ? (
            <p className="font__size-1 form_input-danger">
              {" "}
              {errors.pulseWidth}{" "}
            </p>
          ) : (
            <Form.Control.Feedback className="form_input-success">
              Looks good!
            </Form.Control.Feedback>
          )}
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="dutyCycle">
          <Form.Label className={page === "Contact" ? contact : footer}>
            Duty Cycle
          </Form.Label>
          <Form.Control
            className="font__size-2"
            type="text"
            name="dutyCycle"
            value={values.dutyCycle}
            onChange={handleChange}
            isValid={touched.dutyCycle && !errors.dutyCycle}
          />
          {errors.dutyCycle ? (
            <p className="font__size-1 form_input-danger">
              {" "}
              {errors.dutyCycle}{" "}
            </p>
          ) : (
            <Form.Control.Feedback className="form_input-success">
              Looks good!
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="cwPower">
          <Form.Label className={page === "Contact" ? contact : footer}>
            CW Power (If any)
          </Form.Label>
          <Form.Control
            className="font__size-2"
            type="text"
            name="cwPower"
            value={values.cwPower}
            onChange={handleChange}
            isValid={touched.cwPower && !errors.cwPower}
          />
          {errors.cwPower ? (
            <p className="font__size-1 form_input-danger"> {errors.cwPower} </p>
          ) : (
            <Form.Control.Feedback className="form_input-success">
              Looks good!
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="insertionLoss">
          <Form.Label className={page === "Contact" ? contact : footer}>
            Insertion Loss
          </Form.Label>
          <Form.Control
            className="font__size-2"
            type="text"
            name="insertionLoss"
            value={values.insertionLoss}
            onChange={handleChange}
            isValid={touched.insertionLoss && !errors.insertionLoss}
          />
          {errors.insertionLoss ? (
            <p className="font__size-1 form_input-danger">
              {" "}
              {errors.insertionLoss}{" "}
            </p>
          ) : (
            <Form.Control.Feedback className="form_input-success">
              Looks good!
            </Form.Control.Feedback>
          )}
        </Form.Group>
      </Form.Row>
    </>
  );
};

export default Same;
