import React, { useEffect } from "react";
import { connect } from "react-redux";
import Products from "components/products/Products";
import TableUniqueProductLink from "components/table/TableUniqueProductLink";
import { getAll } from "actions/products";
import { GET_SWITCHES } from "actions/types";

const RfSwitches = ({ headers, content, getAll }) => {
  useEffect(() => {
    getAll("switches", GET_SWITCHES);
  }, [getAll]);
  return (
    <Products
      product="Rf Switches"
      about="RFuW Engineering offers a family of High Power PIN diode based surface mount RF switches which operate HF to Ku Band frequency ranges with power handling capabilities from +50 dBm to +62 dBm. The standard product family comes in SP2T, SP3T, SP4T, SP5T and SP6T configurations."
      img="https://res.cloudinary.com/daiaiwq1q/image/upload/v1622745705/Products/Product%20Images/RFuW_10mmx6mm_RF_Switch_BiasPort_tgnxuu.png"
      headers={headers}
      content={content}
      component={TableUniqueProductLink}
    />
  );
};

const mapStateProps = (state) => ({
  headers: state.table.switchesHeaders,
  content: state.switches.switches
});
export default connect(mapStateProps, { getAll })(RfSwitches);
