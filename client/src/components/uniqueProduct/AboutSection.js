import React, { useState } from "react";
import { connect } from "react-redux";
import { Download } from "react-feather";
import { Button, Form, Col } from "react-bootstrap";
//import CustomImage from "./CustomImage";
import UploadedImage from "./UploadedImage";
import imageUploadHook from "hooks/imageUploadHook";
import ImageUpload from "components/dashboard/forms/ImageUpload";
import { newImage } from "actions/products";

const AboutSection = ({
  product: {
    _id,
    model,
    title,
    description,
    pdfUrl,
    dfxUrl,
    s2pUrl,
    publicId,
    buyNowUrl,
    type
  },
  isAuthenticated,
  newImage
}) => {
  const [
    handleImageUpload,
    handleImageChange,
    fileSelect,
    image,
    handleCancel,
    onSubmit
  ] = imageUploadHook(_id, type, newImage);

  return (
    <section className="u-padding--2">
      <div className="about">
        <div className="about__box1">
          <h2 className="header__text u-center-text font__size-6">{model}</h2>
          <h3 className="font__size-4">{title}</h3>
          <p className="about__text font__size-1">{description}</p>
        </div>
        <div className="about__box2 ">
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
          {image ? null : <UploadedImage publicId={publicId} />}

          <div className="download__links u-margin-top-1">
            {pdfUrl && (
              <a
                className="font__size-2"
                href={pdfUrl}
                rel="noreferrer"
                target="_blank"
              >
                Download .PDF <Download style={{ color: "grey" }} size={20} />
              </a>
            )}
            {dfxUrl && (
              <a
                className="font__size-2"
                href={dfxUrl}
                rel="noreferrer"
                target="_blank"
              >
                Download .DFX <Download style={{ color: "grey" }} size={20} />
              </a>
            )}
            {s2pUrl && (
              <a
                className="font__size-2"
                href={s2pUrl}
                rel="noreferrer"
                target="_blank"
              >
                Download .S2P <Download style={{ color: "grey" }} size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
      {buyNowUrl ? (
        //<div className="rfuw_center u-margin-top-2">
        <Button
          href={buyNowUrl}
          target="_blank"
          rel="noreferrer"
          className="font__size-5 u-padding_lr-2 center_button rfu_button w-40"
        >
          Buy Now
        </Button>
      ) : //   </div>
      null}
    </section>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps, { newImage })(AboutSection);
