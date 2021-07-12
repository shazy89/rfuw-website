import React, { useEffect } from "react";
import { connect } from "react-redux";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./routes/routes";
import PrivateRoute from "routes/PrivateRoute";
import Login from "components/auth/Login";
import NavBar from "components/layout/Navbar";
import Dashboard from "pages/Dashboard";
import DashboardNews from "components/news/NewsCreateDashboard";
import DashboardEvents from "components/home/DashboardEvents";
import RfSwitches from "components/dashboard/forms/RfSwitches";
import RfLimiter from "components/dashboard/forms/RfLimiter";
import SwDrivers from "components/dashboard/forms/SwDrivers";
import ConnectorizedLimiters from "components/dashboard/forms/ConnectorizedLimiters";
import { loadUser, logout } from "actions/auth";
import { HelmetProvider } from "react-helmet-async";
const App = ({ loadUser, logout }) => {
  useEffect(() => {
    if (localStorage.token) {
      loadUser();
    }
    // handle logout if no token
    window.addEventListener("storage", () => {
      if (!localStorage.token) logout();
    });
  }, [loadUser, logout]);
  return (
    <Router>
      <NavBar />
      <HelmetProvider>
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute
            exact
            path="/dashboard/news"
            component={DashboardNews}
          />
          <PrivateRoute
            exact
            path="/dashboard/switches"
            component={RfSwitches}
          />
          <PrivateRoute exact path="/dashboard/limiter" component={RfLimiter} />
          <PrivateRoute
            exact
            path="/dashboard/swdrivers"
            component={SwDrivers}
          />
          <PrivateRoute
            exact
            path="/dashboard/colimiters"
            component={ConnectorizedLimiters}
          />
          <Route exact path="/rfuwlogin" component={Login} />
          <Route component={Routes} />
        </Switch>
      </HelmetProvider>
    </Router>
  );
};

export default connect(null, { loadUser, logout })(App);
