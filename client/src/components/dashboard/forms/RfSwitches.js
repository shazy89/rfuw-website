import React from "react";
import DashbordHeader from "../DashbordHeader";
import { connect } from "react-redux";
import SwitchesFormFields from "./SwitchesFormFields";
import Alert from "components/layout/Alert";
const RfSwitches = ({ history, alerts }) => {
  return (
    <div className="u-padding--3">
      <DashbordHeader history={history} header="Rf Switches" />
      {alerts && <Alert />}
      <SwitchesFormFields edit={false} history={history} />
    </div>
  );
};
const mapStateProps = (state) => ({
  alerts: state.alert
});
export default connect(mapStateProps)(RfSwitches);
