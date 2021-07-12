import React from "react";
import ReusableHeader from "../components/reusable/ReusableHeader";
import SelectContinent from "../components/sales/SelectContinent";
import Footer from "components/layout/Footer";
import Media from "react-media";
import ReusableHelmet from "components/reusable/ReusableHelmet";
const SalesRep = () => {
  return (
    <>
      <ReusableHelmet
        page="Sales Rep"
        content="Phone: +1-877-367-7369 FAX: +1-408-414-1461 Email: sales@rfmw.com"
      />
      <Media query="(min-width: 800px)">
        <ReusableHeader
          page="Sales Rep"
          backgroundImage="https://res.cloudinary.com/daiaiwq1q/image/upload/c_scale,w_1800/v1622821567/Sales/stephen-g-V_1ysj0S8P0-unsplash_dtoyuq.jpg"
        />
      </Media>
      <Media query="(max-width: 800px)">
        <ReusableHeader
          page="Sales Rep"
          backgroundImage="https://res.cloudinary.com/daiaiwq1q/image/upload/c_scale,w_700/v1622821567/Sales/stephen-g-V_1ysj0S8P0-unsplash_dtoyuq.jpg"
        />
      </Media>
      <main>
        <SelectContinent />
      </main>
      <Footer />
    </>
  );
};

export default SalesRep;
