import React from "react";

const ReusableHeader = ({ page, backgroundImage }) => {
  return (
    <header
      className="reusable__header"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(154, 162, 158, 0.863), rgba(154, 162, 158, 0.659)), url(${backgroundImage})`
      }}
    >
      <h1 className="reusable__header-text font__size-7">{page}</h1>
    </header>
  );
};

export default ReusableHeader;
