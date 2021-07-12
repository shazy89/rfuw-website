import React from "react";
import DashbordHeader from "../DashbordHeader";
import { connect } from "react-redux";
import RfLimiterFormFields from "./RfLimiterFormFields";
import Alert from "components/layout/Alert";
const RfLimiter = ({ history, alerts }) => {
  return (
    <div className="u-padding--3">
      <DashbordHeader history={history} header="Rf Limiter" />
      {alerts && <Alert />}
      <RfLimiterFormFields edit={false} history={history} />
    </div>
  );
};
const mapStateProps = (state) => ({
  alerts: state.alert
});
export default connect(mapStateProps)(RfLimiter);
