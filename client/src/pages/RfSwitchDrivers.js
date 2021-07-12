import React, { useEffect } from "react";
import { connect } from "react-redux";
import Products from "components/products/Products";
import TableUniqueProductLink from "components/table/TableUniqueProductLink";
import { getAll } from "actions/products";
import { GET_SW_DRIVERS } from "actions/types";
import Spinner from "components/layout/SpinerLoading";
const RfSwitchDrivers = ({ headers, content, getAll, loading }) => {
  useEffect(() => {
    getAll("swdrivers", GET_SW_DRIVERS);
  }, [getAll]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Products
          product="RF Switch Drivers"
          img="https://res.cloudinary.com/daiaiwq1q/image/upload/v1622745705/Products/Product%20Images/RFuW_SP6T_RF_Switch_tjpyfg.png"
          about="The fundamental building block of a High Power Switch is the PIN Diode and it is the I layer, or more precisely the intrinsic layer, which gives this device its unique characteristics. When charge is injected into the intrinsic layer of a PIN diode it becomes highly conductive and presents a low insertion loss path, the ON State. When the intrinsic layer is depleted of charge it becomes non-conductive and presents a high isolation state or the OFF State. These two states of the PIN Diode Switch can be readily accomplished when dealing with low power applications and there are a myriad of commercially available MMIC Switch Drivers for such applications. However, when the operating power is high, or the operating frequency is low, the PIN Diode requires high biasing voltages which exceeds the capabilities of commercially available MMIC Switch Drivers. It is for these more challenging applications that the family of RFD PIN Switch Drivers were designed to address."
          headers={headers}
          content={content}
          component={TableUniqueProductLink}
        />
      )}
    </>
  );
};
const mapStateProps = (state) => ({
  headers: state.table.switchDriversHeaders,
  content: state.swDrivers.swdrivers,
  loading: state.swDrivers.loading
});
export default connect(mapStateProps, { getAll })(RfSwitchDrivers);
