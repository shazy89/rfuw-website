import React from "react";

const FeaturesSwitch = ({
  product: {
    frequencyRange,
    switchTopology,
    averagePower,
    peakPower,
    insertionLoss,
    returnLoss,
    iso,
    ip3,
    status
  }
}) => {
  return (
    <div className="features">
      <div className="features__info-box">
        {frequencyRange ? (
          <h5 className="features__info">
            Frequency Range: <span> {frequencyRange}</span>
          </h5>
        ) : null}
        {switchTopology ? (
          <h5 className="features__info">
            Switch Topology: <span>{switchTopology}</span>
          </h5>
        ) : null}
        {averagePower ? (
          <h5 className="features__info">
            Average Power(CW): <span>{averagePower}</span>
          </h5>
        ) : null}
        {peakPower ? (
          <h5 className="features__info">
            Peak Power(dBm): <span>{peakPower}</span>
          </h5>
        ) : null}
        {insertionLoss ? (
          <h5 className="features__info">
            {" "}
            Ant Insertion Loss: <span> {insertionLoss}</span>
          </h5>
        ) : null}
        {returnLoss ? (
          <h5 className="features__info">
            {" "}
            Return Loss: <span>{returnLoss}</span>
          </h5>
        ) : null}
        {iso ? (
          <h5 className="features__info">
            {" "}
            ISO(dB): <span>{iso}</span>
          </h5>
        ) : null}
        {ip3 ? (
          <h5 className="features__info">
            {" "}
            IP3(dB): <span>{ip3}</span>
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

export default FeaturesSwitch;
