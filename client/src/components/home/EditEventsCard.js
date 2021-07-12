import React, { useState } from "react";
import { connect } from "react-redux";
import { editEvent } from "actions/events";
import { Form, Col, Card, Button } from "react-bootstrap";

const EditEventsCard = ({ event, setEdit, editEvent }) => {
  const [formData, setFormData] = useState(event);
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    editEvent(formData);
    setEdit(false);
  };
  return (
    <Col>
      <Card style={{ width: "27rem" }}>
        <Card.Body>
          <Form onSubmit={onSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={onChange}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="content">
                <Form.Label>Content</Form.Label>
                <Form.Control
                  type="text"
                  as="textarea"
                  rows={3}
                  name="content"
                  value={formData.content}
                  onChange={onChange}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="imageUrl">
                <Form.Label>Image Url</Form.Label>
                <Form.Control
                  type="text"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={onChange}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="publicId">
                <Form.Label>Pdf Url</Form.Label>
                <Form.Control
                  type="text"
                  name="publicId"
                  value={formData.publicId}
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
        </Card.Body>
      </Card>
    </Col>
  );
};

export default connect(null, { editEvent })(EditEventsCard);
/*        
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setFormData({ ...formData, image: reader.result });
    };
  };
<Form.Group as={Col} md="6" controlId="image">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  name="image"
                  onChange={handleImageChange}
                  accept="image/*"
                  type="file"
                  alt="selected rfuw chip"
                  size="sm"
                />
              </Form.Group>
              {formData.image && (
                <img
                  alt="uploaded rfuw event card"
                  src={formData.image}
                  style={{ width: "10rem", height: "10rem" }}
                />
              )}*/
