import React from "react";
import Media from "react-media";
import { Image as CloudinaryImage } from "cloudinary-react";

const CustomImage = ({ model }) => {
  return (
    <>
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
                publicId="RFuW_10mmx6mm_RF_Switch_BiasPort_tgnxuu_d3mhlh.jpg"
                crop="scale"
                alt="rfuw chip"
              />
            )}

            {matches.small && (
              <CloudinaryImage
                className="about__img"
                cloudName="daiaiwq1q"
                publicId="RFuW_10mmx6mm_RF_Switch_BiasPort_tgnxuu_d3mhlh.jpg"
                crop="scale"
                width={400}
                alt="rfuw chip"
              />
            )}
          </>
        )}
      </Media>

      <h5 className="about__box2-header font__size-3">{model}</h5>
    </>
  );
};

export default CustomImage;
