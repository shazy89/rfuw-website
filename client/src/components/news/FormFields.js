import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, Col, Button } from "react-bootstrap";
import { newOredit } from "actions/news";
import { newsFormFields } from "./constants";

const FormFields = ({ history, edit, info, newOredit }) => {
  const [formData, setFormData] = useState(!edit ? newsFormFields : info);

  const { title, content, pdfUrl } = formData;
  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     setFormData({ ...formData, image: reader.result });
  //   };
  // };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    newOredit(formData, edit, history);
  };

  return (
    <div className={!edit ? "w-60 center__obj" : null}>
      <Form
        className={!edit ? "u-margin-top-3 u-padding--1" : null}
        onSubmit={onSubmit}
      >
        <Form.Row>
          <Form.Group as={Col} controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              className={!edit ? "font__size-2" : null}
              type="text"
              name="title"
              value={title}
              onChange={onChange}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="content">
            <Form.Label>Content</Form.Label>
            <Form.Control
              className={!edit ? "font__size-2" : null}
              type="text"
              as="textarea"
              rows={3}
              name="content"
              value={content}
              onChange={onChange}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="pdfUrl">
            <Form.Label>Pdf Url</Form.Label>
            <Form.Control
              className={!edit ? "font__size-2" : null}
              type="text"
              name="pdfUrl"
              value={pdfUrl}
              onChange={onChange}
            />
          </Form.Group>
        </Form.Row>
        <div className="form__button-box u-margin-top-3">
          <Button
            className="u-margin-top-small rfu_button w-40 font__size-2"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default connect(null, { newOredit })(FormFields);
