import React from "react";
import DashbordHeader from "components/dashboard/DashbordHeader";
import SwitchesFormFields from "components/dashboard/forms/SwitchesFormFields";
import RfLimiterFormFields from "components/dashboard/forms/RfLimiterFormFields";
import SwDriversFormFields from "components/dashboard/forms/SwDriversFormFields";
import CoLimitersFormFields from "components/dashboard/forms/CoLimitersFormFields";

const EditProduct = ({ history, product }) => {
  const forms = {
    switches: (
      <SwitchesFormFields history={history} edit={true} product={product} />
    ),
    limiters: (
      <RfLimiterFormFields history={history} edit={true} product={product} />
    ),
    swdrivers: (
      <SwDriversFormFields history={history} edit={true} product={product} />
    ),
    colimiters: (
      <CoLimitersFormFields history={history} edit={true} product={product} />
    )
  };

  return (
    <div className="u-padding--3">
      <DashbordHeader history={history} header="Edit Product" />
      {forms[product.type]}
    </div>
  );
};

export default EditProduct;
