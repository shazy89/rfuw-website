import React, { useEffect } from "react";
import { connect } from "react-redux";
import Products from "components/products/Products";
import TableUniqueProductLink from "components/table/TableUniqueProductLink";
import { getAll } from "actions/products";
import { GET_CO_LIMITERS } from "actions/types";
import Spinner from "components/layout/SpinerLoading";

const ConnectorizedLimiters = ({ headers, getAll, content, loading }) => {
  useEffect(() => {
    getAll("colimiters", GET_CO_LIMITERS);
  }, [getAll]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Products
          product="Connectorized Limiters"
          about="RFuW Engineering offers a family of SMA Connectorized RF Limiters (female-female) leveraging the
          extensive offering of SMT Limiters covering HF to Ku Band and Peak Power levels up to +63 dBm. These
          high thermal conductivity enclosures permit achieving rated power handling specifications without
          reliance of external heat sinking. RFuW Engineering product offering is an upgrade replacement for the
          former Aeroflex ACC/Cobham C46 body style RF Limiters which are no longer available. The SMA
          Connectorized RF Limiter enclosure measures 0.75” x 0.75” x 2.6”."
          img="https://res.cloudinary.com/daiaiwq1q/image/upload/v1622745705/Products/Product%20Images/RFuW_8mmx5mm_RF_Limiter_bds4i9.png"
          headers={headers}
          component={TableUniqueProductLink}
          content={content}
        />
      )}
    </>
  );
};
const mapStateProps = (state) => ({
  headers: state.table.limiterHeaders,
  content: state.coLimiters.colimiters,
  loading: state.coLimiters.loading
});
export default connect(mapStateProps, { getAll })(ConnectorizedLimiters);
