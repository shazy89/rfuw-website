import React from "react";
import { Spinner } from "react-bootstrap";
const SpinerLoading = () => {
  return (
    <div className="spinner--box">
      <Spinner className="spinner--loading" animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};

export default SpinerLoading;
