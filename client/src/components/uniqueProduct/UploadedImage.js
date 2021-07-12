import React from "react";
import Media from "react-media";
import { Image as CloudinaryImage } from "cloudinary-react";

const UploadedImage = ({ publicId }) => {
  return (
    <Media
      queries={{
        small: "(max-width: 800px)",
        normal: "(min-width: 800px)"
      }}
    >
      {(matches) => (
        <>
          {matches.normal && (
            <CloudinaryImage
              className="about__img"
              cloudName="daiaiwq1q"
              width={800}
              publicId={publicId}
              alt="rfuw chip"
            />
          )}

          {matches.small && (
            <CloudinaryImage
              className="about__img"
              cloudName="daiaiwq1q"
              publicId={publicId}
              crop="scale"
              width={400}
              alt="rfuw chip"
            />
          )}
        </>
      )}
    </Media>
  );
};

export default UploadedImage;
