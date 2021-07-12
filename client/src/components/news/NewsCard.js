import React, { useState } from "react";
import { connect } from "react-redux";
import { Col, Card, Button } from "react-bootstrap";
import FormFieldds from "./FormFields";
import { Image as NewsImage } from "cloudinary-react";
import { ArrowRight, X, Edit2 } from "react-feather";
import imageUploadHook from "hooks/imageUploadHook";
import ImageUpload from "components/dashboard/forms/ImageUpload";
import { removeNews, newImage } from "actions/news";

const NewsCard = ({ info, isAuthenticated, removeNews, newImage }) => {
  const [edit, setEdit] = useState(false);
  const [
    handleImageUpload,
    handleImageChange,
    fileSelect,
    image,
    handleCancel,
    onSubmit
  ] = imageUploadHook(info._id, info.type, newImage);

  const onDelete = (e) => {
    e.preventDefault();
    removeNews(info._id);
  };
  const handleEdit = () => {
    edit ? setEdit(false) : setEdit(true);
  };

  return (
    <Col className="u-margin-bottom-3">
      <Card className="news__card">
        {isAuthenticated && (
          <ImageUpload
            handleImageChange={handleImageChange}
            fileSelect={fileSelect}
            handleImageUpload={handleImageUpload}
            image={image}
            handleCancel={handleCancel}
            onSubmit={onSubmit}
            isAuthenticated={isAuthenticated}
          />
        )}
        {image ? null : (
          <NewsImage
            className="news__card--img"
            cloudName="daiaiwq1q"
            publicId={info.publicId}
            crop="scale"
            loading="lazy"
            width={700}
            alt="rfuw chip"
          />
        )}

        <Card.Body className="news__card--body u-margin-bottom-1 u-margin-top-1">
          {edit ? (
            <FormFieldds info={info} edit={true} />
          ) : (
            <>
              <Card.Title className="news__card--header header__text">
                {info.title}
              </Card.Title>
              <Card.Text className="news__card--text">{info.content}</Card.Text>
            </>
          )}
          {isAuthenticated && (
            <>
              <Button variant="link" onClick={handleEdit}>
                Edit{" "}
                {!edit ? (
                  <Edit2 className="news__card--icon" size={20} />
                ) : (
                  <X className="news__card--icon" size={20} />
                )}
              </Button>
              <Button
                variant="link"
                onClick={onDelete}
                className="u-margin-left-2"
              >
                Delete
              </Button>
            </>
          )}
        </Card.Body>
        {!edit ? (
          <p className="u-margin-left-2">
            For more information click
            <Card.Link
              href={info.pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="u-padding--05 rfu_cta_button news__card--link"
            >
              <ArrowRight className="news__card--icon" size={20} />
              here
            </Card.Link>
          </p>
        ) : null}
      </Card>
    </Col>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};
export default connect(mapStateToProps, { removeNews, newImage })(NewsCard);
