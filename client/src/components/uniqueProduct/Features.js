import React from "react";
import FeaturesSwitch from "./FeaturesSwitch";
import FeaturesLimiters from "./FeaturesLimiters";
import FaturesSwDrivers from "./FaturesSwDrivers";
import FeaturesCoLimiters from "./FeaturesCoLimiters";

const Features = ({ product }) => {
  let features;
  switch (product.type) {
    case "switches":
      features = <FeaturesSwitch product={product} />;
      break;
    case "limiters":
      features = <FeaturesLimiters product={product} />;
      break;
    case "swdrivers":
      features = <FaturesSwDrivers product={product} />;
      break;
    case "colimiters":
      features = <FeaturesCoLimiters product={product} />;
      break;
    default:
      console.log("no data");
  }
  return (
    <section className="u-padding--2 u-margin-bottom-3">
      <h2 className="font__size-5 features__header u-center-text u-padding--2">
        Product Features
      </h2>
      {features}
    </section>
  );
};

export default Features;
