import React, { useState } from "react";

import { Form, Col, Button, InputGroup } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "actions/auth";

const Login = ({ isAuthenticated, login }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <section className="u-padding--2">
      <div className="login">
        <div>
          <h1 className="u-center-text">Sign Into RFuW Engineering Dev</h1>
        </div>
        <Form className="u-margin-top-3 u-padding--1" onSubmit={onSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="email">
              <Form.Label>Email Address</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  className="font__size-2"
                  type="text"
                  name="email"
                  placeholder="tim@rfuw-engineering.com"
                  value={email}
                  onChange={onChange}
                />
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="password">
              <Form.Label className="">Password</Form.Label>
              <Form.Control
                className="font__size-2"
                type="password"
                name="password"
                value={password}
                onChange={onChange}
              />
            </Form.Group>
          </Form.Row>
          <div className="form__button-box">
            <Button
              className="u-margin-top-small rfu_button w-40 font__size-2"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
};
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps, { login })(Login);
