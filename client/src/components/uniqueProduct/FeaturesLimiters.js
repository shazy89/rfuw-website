import React from "react";

const FeaturesLimiters = ({
  product: {
    limiterDescription,
    frequency,
    insertionLoss,
    inputPowerCw,
    inputPowerPeak,
    returnLoss,
    flatLeakage,
    spikeLeakage,
    recoveryTime,
    status
  }
}) => {
  return (
    <div className="features">
      <div className="features__info-box">
        {limiterDescription ? (
          <h5 className="features__info">
            Limiter Description: <span>{limiterDescription}</span>
          </h5>
        ) : null}
        {frequency ? (
          <h5 className="features__info">
            Frequency (GHz): <span>{frequency}</span>
          </h5>
        ) : null}
        {insertionLoss ? (
          <h5 className="features__info">
            Insertion Loss(dB): <span>{insertionLoss}</span>
          </h5>
        ) : null}
        {returnLoss ? (
          <h5 className="features__info">
            {" "}
            Return Loss(dB)<span>{returnLoss}</span>
          </h5>
        ) : null}
        {inputPowerCw ? (
          <h5 className="features__info">
            Cw Input Power(Dbm): <span>{inputPowerCw}</span>
          </h5>
        ) : null}
        {inputPowerPeak ? (
          <h5 className="features__info">
            {" "}
            Peak Input Power (Dbm): <span>{inputPowerPeak}</span>
          </h5>
        ) : null}
        {flatLeakage ? (
          <h5 className="features__info">
            {" "}
            Flat Leakage Power(dBm): <span>{flatLeakage}</span>
          </h5>
        ) : null}
        {spikeLeakage ? (
          <h5 className="features__info">
            {" "}
            Spike Leakage (ergs): <span>{spikeLeakage}</span>
          </h5>
        ) : null}
        {recoveryTime ? (
          <h5 className="features__info">
            {" "}
            Recovery Time (nsec): <span>{recoveryTime}</span>
          </h5>
        ) : null}
        {status ? (
          <h5 className="features__info">
            {" "}
            Status: <span>{status}</span>
          </h5>
        ) : null}
      </div>
    </div>
  );
};

export default FeaturesLimiters;
