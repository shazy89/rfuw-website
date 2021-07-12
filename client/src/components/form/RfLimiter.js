import React from "react";
import { Form, Col } from "react-bootstrap";
const RfLimiter = ({
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
        <Form.Group as={Col} md="6" controlId="flatLeakage">
          <Form.Label className={page === "Contact" ? contact : footer}>
            Flat Leakage
          </Form.Label>
          <Form.Control
            className="font__size-2"
            type="text"
            name="flatLeakage"
            value={values.flatLeakage}
            onChange={handleChange}
            isValid={touched.flatLeakage && !errors.flatLeakage}
          />
          {errors.flatLeakage ? (
            <p className="font__size-1 form_input-danger">
              {" "}
              {errors.flatLeakage}{" "}
            </p>
          ) : (
            <Form.Control.Feedback className="form_input-success">
              Looks good!
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="recoveryTime">
          <Form.Label className={page === "Contact" ? contact : footer}>
            Recovery Time
          </Form.Label>
          <Form.Control
            className="font__size-2"
            type="text"
            name="recoveryTime"
            value={values.recoveryTime}
            onChange={handleChange}
            isValid={touched.recoveryTime && !errors.recoveryTime}
          />
          {errors.recoveryTime ? (
            <p className="font__size-1 form_input-danger">
              {" "}
              {errors.recoveryTime}{" "}
            </p>
          ) : (
            <Form.Control.Feedback className="form_input-success">
              Looks good!
            </Form.Control.Feedback>
          )}
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="12" controlId="message">
          <Form.Label className={page === "Contact" ? contact : footer}>
            Message
          </Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={values.message}
            onChange={handleChange}
            rows={4}
            isValid={touched.message && !errors.message}
          />
          {errors.message ? (
            <p className="font__size-1 form_input-danger"> {errors.message} </p>
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

export default RfLimiter;
