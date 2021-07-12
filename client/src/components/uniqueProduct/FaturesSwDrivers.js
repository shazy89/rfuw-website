import React from "react";

const FaturesSwDrivers = ({
  product: { content, control, voltage1, voltage2, sinkMa, sourceMa }
}) => {
  return (
    <div className="features">
      <div className="features__info-box">
        {content ? (
          <h5 className="features__info">
            Description: <span>{content}</span>
          </h5>
        ) : null}
        {control ? (
          <h5 className="features__info">
            Control: <span>{control}</span>
          </h5>
        ) : null}
        {voltage1 ? (
          <h5 className="features__info">
            Voltage1: <span>{voltage1}</span>
          </h5>
        ) : null}
        {voltage2 ? (
          <h5 className="features__info">
            {" "}
            voltage2<span>{voltage2}</span>
          </h5>
        ) : null}
        {sinkMa ? (
          <h5 className="features__info">
            Sink mA: <span>{sinkMa}</span>
          </h5>
        ) : null}
        {sourceMa ? (
          <h5 className="features__info">
            {" "}
            Source mA: <span>{sourceMa}</span>
          </h5>
        ) : null}
      </div>
    </div>
  );
};

export default FaturesSwDrivers;
