import React from "react";
import DashbordHeader from "../DashbordHeader";
import { connect } from "react-redux";
import CoLimitersFormFields from "./CoLimitersFormFields";
import Alert from "components/layout/Alert";

const ConnectorizedLimiters = ({ history, alerts }) => {
  return (
    <div className="u-padding--3">
      <DashbordHeader history={history} header="Connectorized Limiter" />
      {alerts && <Alert />}
      <CoLimitersFormFields edit={false} history={history} />
    </div>
  );
};

const mapStateProps = (state) => ({
  alerts: state.alert
});
export default connect(mapStateProps)(ConnectorizedLimiters);
