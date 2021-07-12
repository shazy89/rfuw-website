import React from "react";
import { Helmet } from "react-helmet-async";

const ReusableHelmet = ({ page, content }) => {
  return (
    <Helmet>
      <title>RFuW Engineering | {page}</title>
      {<meta name="description" content={content} />}
    </Helmet>
  );
};

export default ReusableHelmet;
