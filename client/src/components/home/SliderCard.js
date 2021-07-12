import React from "react";
import { Card } from "react-bootstrap";
import { Image as CloudinaryImage } from "cloudinary-react";
import { Link } from "react-router-dom";

const SliderCard = ({
  item: { publicId, title, description, model, _id, type }
}) => {
  return (
    <Card className="welcome__slider--card">
      <CloudinaryImage
        className="welcome__slider--image u-padding--05"
        cloudName="daiaiwq1q"
        crop="scale"
        width={500}
        publicId={publicId}
        alt="featured chip"
      />

      <Card.Body className="u-margin-top-2">
        <Card.Title className="news__card--header header__text">
          {title}
        </Card.Title>
        <Card.Text className="news__card--text"> {description}</Card.Text>
        <div style={{ display: "flex" }}>
          <Link
            to={{
              pathname: `rfuw/${model}`,
              state: { id: _id, type: type }
            }}
            className="u-margin-top-2 u-padding--05 rfu_button welcome__slider--button"
          >
            Data Sheet
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SliderCard;
