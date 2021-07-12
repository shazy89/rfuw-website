import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "components/layout/SpinerLoading";

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  ...rest
}) => (
  <>
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? (
          <Redirect to="/rfuwlogin" />
        ) : loading ? (
          <Spinner />
        ) : (
          <>
            <Component {...props} />
          </>
        )
      }
    />
  </>
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(PrivateRoute);
