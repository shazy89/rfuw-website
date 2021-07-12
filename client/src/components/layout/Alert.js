import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Alert } from "react-bootstrap";

const Alerts = ({ alerts }) => {
  return alerts.map(({ id, msg, alertType }) => {
    return (
      <Alert key={id} className="alerts" variant={alertType}>
        {msg}
      </Alert>
    );
  });
};
Alerts.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    alerts: state.alert
  };
};

export default connect(mapStateToProps)(Alerts);
