import React, { useState } from "react";
import { Formik } from "formik";
import { withRouter } from "react-router";
import { Form, Col, Button, InputGroup } from "react-bootstrap";
import {
  rfSwitches,
  rfLimiter,
  otherval,
  formInitialValues
} from "./constants";
import Same from "./Same";
import RfSwitches from "./RfSwitches";
import RfLimiter from "./RfLimiter";
import emailjs from "emailjs-com";

const CustomIncuryForm = ({ page }) => {
  const [reason, setReason] = useState("");
  const footer = "font__size-2 par__text--white";
  const contact = "font__size-2 contact__form-text";
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4qpvdak",
        "template_yxz2upc",
        e.target,
        "user_tcNbHOAU8pqmG5XUNWpip"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }

  return (
    <Formik
      initialValues={formInitialValues}
      validationSchema={
        (!reason && otherval) ||
        (reason === "Other" && otherval) ||
        (reason === "Rf Switches" && rfSwitches) ||
        (reason === "Rf Limiter" && rfLimiter)
      }
      onSubmit={(values, actions) => {
        actions.resetForm();
      }}
    >
      {({ handleSubmit, errors, touched, values, handleChange }) => {
        return (
          <Form
            className="u-margin-top-big"
            onSubmit={(e) => {
              sendEmail(e);
              handleSubmit();
            }}
          >
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="name">
                <Form.Label className={page === "Contact" ? contact : footer}>
                  Name
                </Form.Label>
                <Form.Control
                  className="font__size-2"
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  isValid={touched.name && !errors.name}
                />
                {errors.name ? (
                  <p className="font__size-1 form_input-danger">
                    {" "}
                    {errors.name}{" "}
                  </p>
                ) : (
                  <Form.Control.Feedback className="form_input-success">
                    Looks good!
                  </Form.Control.Feedback>
                )}
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="company">
                <Form.Label className={page === "Contact" ? contact : footer}>
                  Company
                </Form.Label>
                <Form.Control
                  className="font__size-2"
                  type="text"
                  name="company"
                  value={values.company}
                  onChange={handleChange}
                  isValid={touched.company && !errors.company}
                />

                {errors.company ? (
                  <p className="font__size-1 form_input-danger">
                    {" "}
                    {errors.company}{" "}
                  </p>
                ) : (
                  <Form.Control.Feedback className="form_input-success">
                    Looks good!
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="physicalAddress">
                <Form.Label className={page === "Contact" ? contact : footer}>
                  Physical Address
                </Form.Label>
                <Form.Control
                  className="font__size-2"
                  type="text"
                  name="physicalAddress"
                  value={values.physicalAddress}
                  onChange={handleChange}
                  isValid={touched.physicalAddress && !errors.physicalAddress}
                />
                {errors.physicalAddress ? (
                  <p className="font__size-1 form_input-danger">
                    {" "}
                    {errors.physicalAddress}{" "}
                  </p>
                ) : (
                  <Form.Control.Feedback className="form_input-success">
                    Looks good!
                  </Form.Control.Feedback>
                )}
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="emailAddress">
                <Form.Label className={page === "Contact" ? contact : footer}>
                  Email Address
                </Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    className="font__size-2"
                    type="text"
                    name="emailAddress"
                    placeholder="sales@rfuw-engineering.com"
                    value={values.emailAddress}
                    onChange={handleChange}
                    isValid={touched.emailAddress && !errors.emailAddress}
                  />
                </InputGroup>
                {errors.emailAddress ? (
                  <p className="font__size-1 form_input-danger">
                    {" "}
                    {errors.emailAddress}{" "}
                  </p>
                ) : (
                  <Form.Control.Feedback className="form_input-success">
                    Looks good!
                  </Form.Control.Feedback>
                )}
              </Form.Group>
              <Form.Group as={Col} md="12">
                <Form.Label className={page === "Contact" ? contact : footer}>
                  Reasons For contact
                </Form.Label>
                <Form.Control
                  onChange={(e) => {
                    handleChange(e);
                    setReason(e.target.value);
                  }}
                  className="font__size-2"
                  name="reasons"
                  value={values.reasons}
                  as="select"
                  isValid={touched.emailAddress && !errors.emailAddress}
                  custom
                >
                  <option>Reason for contact</option>
                  <option>Rf Switches</option>
                  <option>Rf Limiter</option>
                  <option>Other</option>
                </Form.Control>
                {errors.reasons ? (
                  <p className="font__size-1 form_input-danger">
                    {" "}
                    {errors.reasons}{" "}
                  </p>
                ) : (
                  <Form.Control.Feedback className="form_input-success">
                    Looks good!
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </Form.Row>
            {(reason === "Rf Switches" || reason === "Rf Limiter") && (
              <Same
                handleChange={handleChange}
                values={values}
                errors={errors}
                touched={touched}
                page={page}
                footer={footer}
                contact={contact}
              />
            )}
            {reason === "Rf Switches" && (
              <RfSwitches
                handleChange={handleChange}
                values={values}
                errors={errors}
                touched={touched}
                page={page}
                footer={footer}
                contact={contact}
              />
            )}
            {reason === "Rf Limiter" && (
              <RfLimiter
                handleChange={handleChange}
                values={values}
                errors={errors}
                touched={touched}
                page={page}
                footer={footer}
                contact={contact}
              />
            )}
            {reason === "Other" && (
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
                    <p className="font__size-1 form_input-danger">
                      {" "}
                      {errors.message}{" "}
                    </p>
                  ) : (
                    <Form.Control.Feedback className="form_input-success">
                      Looks good!
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
              </Form.Row>
            )}

            <div className="form__button-box">
              <Button
                className="u-margin-top-small rfu_button w-40 font__size-2"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default withRouter(CustomIncuryForm);
