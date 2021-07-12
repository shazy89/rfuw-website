import React, { useEffect } from "react";
import { connect } from "react-redux";
import Products from "components/products/Products";
import TableUniqueProductLink from "components/table/TableUniqueProductLink";
import { getAll } from "actions/products";
import { GET_LIMITERS } from "actions/types";
const RfLimiter = ({ headers, content, getAll }) => {
  useEffect(() => {
    getAll("limiters", GET_LIMITERS);
  }, [getAll]);
  return (
    <Products
      product="Rf Limiters"
      about='RFuW Engineering offers a family of passive and quasi-active High Power RF Limiters which operate from HF to Ku Band frequency ranges with power handling capabilities up to +60 dBm. These RF Limiters provide "Always On" protection which afford complete protection to sensitive RF receivers, even when the system is turned off.'
      img="https://res.cloudinary.com/daiaiwq1q/image/upload/v1622745705/Products/Product%20Images/RFuW_8mmx5mm_RF_Limiter_bds4i9.png"
      headers={headers}
      content={content}
      component={TableUniqueProductLink}
    />
  );
};
const mapStateProps = (state) => ({
  headers: state.table.limiterHeaders,
  content: state.limiters.limiters
});
export default connect(mapStateProps, { getAll })(RfLimiter);
