import React from "react";
import { Form, Col } from "react-bootstrap";

const SharedFields = ({ onChange, edit, formData }) => {
  return (
    <>
      {" "}
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="model">
          <Form.Label>Model</Form.Label>
          <Form.Control
            className={!edit ? "font__size-2" : null}
            type="text"
            name="model"
            value={formData.model}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            className={!edit ? "font__size-2" : null}
            type="text"
            name="title"
            value={formData.title}
            onChange={onChange}
          />
        </Form.Group>
        {formData.type !== "swdrivers" ? (
          <Form.Group as={Col} md="4" controlId="insertionLoss">
            <Form.Label>Insertion Loss</Form.Label>
            <Form.Control
              className={!edit ? "font__size-2" : null}
              type="text"
              name="insertionLoss"
              value={formData.insertionLoss}
              onChange={onChange}
            />
          </Form.Group>
        ) : null}
      </Form.Row>
      <Form.Row>
        {formData.type !== "swdrivers" ? (
          <>
            {" "}
            <Form.Group as={Col} md="3" controlId="returnLoss">
              <Form.Label>Return Loss</Form.Label>
              <Form.Control
                className={!edit ? "font__size-2" : null}
                type="text"
                name="returnLoss"
                value={formData.returnLoss}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="status">
              <Form.Label>Status</Form.Label>
              <Form.Control
                className={!edit ? "font__size-2" : null}
                type="text"
                name="status"
                value={formData.status}
                onChange={onChange}
              />
            </Form.Group>{" "}
          </>
        ) : null}

        <Form.Group
          className="rfuw_center"
          as={Col}
          md="3"
          controlId="featureProduct"
        >
          <Form.Check
            name="featureProduct"
            type="checkbox"
            label="Add to feature product list"
            onChange={onChange}
            checked={formData.featureProduct}
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="6" controlId="pdfUrl">
          <Form.Label>Pdf Url</Form.Label>
          <Form.Control
            className={!edit ? "font__size-2" : null}
            type="text"
            name="pdfUrl"
            value={formData.pdfUrl}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="dfxUrl">
          <Form.Label>Dfx Url</Form.Label>
          <Form.Control
            className={!edit ? "font__size-2" : null}
            type="text"
            name="dfxUrl"
            value={formData.dfxUrl}
            onChange={onChange}
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="6" controlId="s2pUrl">
          <Form.Label>S2P Url</Form.Label>
          <Form.Control
            className={!edit ? "font__size-2" : null}
            type="text"
            name="s2pUrl"
            value={formData.s2pUrl}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="buyNowUrl">
          <Form.Label>Buy Now Url</Form.Label>
          <Form.Control
            className={!edit ? "font__size-2" : null}
            type="text"
            name="buyNowUrl"
            value={formData.buyNowUrl}
            onChange={onChange}
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="12" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            className={!edit ? "font__size-2 " : null}
            type="text"
            as="textarea"
            rows={5}
            name="description"
            value={formData.description}
            onChange={onChange}
          />
        </Form.Group>
      </Form.Row>
    </>
  );
};

export default SharedFields;
