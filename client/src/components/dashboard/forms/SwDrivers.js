import React from "react";
import DashbordHeader from "../DashbordHeader";
import { connect } from "react-redux";
import SwDriversFormFields from "./SwDriversFormFields";
import Alert from "components/layout/Alert";
const SwDrivers = ({ history, alerts }) => {
  return (
    <div className="u-padding--3">
      <DashbordHeader history={history} header="Rf Switch Drivers" />
      {alerts && <Alert />}
      <SwDriversFormFields edit={false} history={history} />
    </div>
  );
};
const mapStateProps = (state) => ({
  alerts: state.alert
});
export default connect(mapStateProps)(SwDrivers);
