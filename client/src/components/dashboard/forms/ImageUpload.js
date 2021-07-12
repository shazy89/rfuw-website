import React from "react";
import { Button, Form, Col } from "react-bootstrap";
const ImageUpload = ({
  fileSelect,
  handleImageChange,
  image,
  handleImageUpload,
  handleCancel,
  onSubmit
}) => {
  return (
    <div>
      <div>
        {<Button onClick={handleImageUpload}>Browse</Button>}
        {image && (
          <Button className="u-margin-left-1" onClick={handleCancel}>
            X
          </Button>
        )}
      </div>
      <Form onSubmit={onSubmit}>
        <Form.Row>
          <Form.Group as={Col} md="3" controlId="image">
            <Form.Control
              ref={fileSelect}
              style={{ display: "none" }}
              name="image"
              onChange={handleImageChange}
              accept="image/*"
              type="file"
              alt="selected rfuw chip"
              size="sm"
            />
          </Form.Group>
          {image && (
            <div style={{ display: "grid" }}>
              <img
                alt="uploaded rfu chip"
                src={image}
                className="upload__img u-margin-top-1"
              />
              <Button className="u-margin-top-1" type="submit">
                Change
              </Button>
            </div>
          )}
        </Form.Row>
      </Form>
    </div>
  );
};

export default ImageUpload;
