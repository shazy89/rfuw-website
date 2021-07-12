import React from "react";
import { Form, Col } from "react-bootstrap";
const RfSwitches = ({
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
        <Form.Group as={Col} md="4" controlId="returnLoss">
          <Form.Label className={page === "Contact" ? contact : footer}>
            Return Loss
          </Form.Label>
          <Form.Control
            className="font__size-2"
            type="text"
            name="returnLoss"
            value={values.returnLoss}
            onChange={handleChange}
            isValid={touched.returnLoss && !errors.returnLoss}
          />
          {errors.returnLoss ? (
            <p className="font__size-1 form_input-danger">
              {" "}
              {errors.returnLoss}{" "}
            </p>
          ) : (
            <Form.Control.Feedback className="form_input-success">
              Looks good!
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="isolation">
          <Form.Label className={page === "Contact" ? contact : footer}>
            Isolation
          </Form.Label>
          <Form.Control
            className="font__size-2"
            type="text"
            name="isolation"
            value={values.isolation}
            onChange={handleChange}
            isValid={touched.isolation && !errors.isolation}
          />
          {errors.isolation ? (
            <p className="font__size-1 form_input-danger">
              {" "}
              {errors.isolation}{" "}
            </p>
          ) : (
            <Form.Control.Feedback className="form_input-success">
              Looks good!
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="switchingTime">
          <Form.Label className={page === "Contact" ? contact : footer}>
            Switching Time
          </Form.Label>
          <Form.Control
            className="font__size-2"
            type="text"
            name="switchingTime"
            value={values.switchingTime}
            onChange={handleChange}
            isValid={touched.switchingTime && !errors.switchingTime}
          />
          {errors.switchingTime ? (
            <p className="font__size-1 form_input-danger">
              {" "}
              {errors.switchingTime}{" "}
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

export default RfSwitches;
