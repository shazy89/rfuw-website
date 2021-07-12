import React from "react";
import { Button } from "react-bootstrap";

const DashbordHeader = ({ header, history }) => {
  return (
    <>
      <div className="border__bottom">
        <Button
          className="btn-features navigate__back-btn"
          variant="light"
          onClick={history.goBack}
        >
          <span>&lt;&lt;</span> Back
        </Button>
      </div>
      <h1 className="u-center-text">{header}</h1>
    </>
  );
};

export default DashbordHeader;
