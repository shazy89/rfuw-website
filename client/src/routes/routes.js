import React, { Suspense, lazy } from "react";

import { Route, Switch } from "react-router";
import SpinerLoading from "../components/layout/SpinerLoading";
import ScrollToTop from "components/reusable/ScrollToTop";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const SaleRep = lazy(() => import("../pages/SalesRep"));
const ContactUs = lazy(() => import("../pages/ContactUs"));
const News = lazy(() => import("../pages/News"));
const RfSwitches = lazy(() => import("../pages/RfSwitches"));
const RfLimiter = lazy(() => import("../pages/RfLimiter"));
const ConnectorizedLimiters = lazy(() =>
  import("../pages/ConnectorizedLimiters")
);

const RfSwitchDrivers = lazy(() => import("../pages/RfSwitchDrivers"));
const UniqueProduct = lazy(() => import("../pages/UniqueProduct"));
const NotFound = lazy(() => import("../pages/NotFound"));

const routes = () => {
  return (
    <>
      <div className="rfu__container">
        <Suspense fallback={<SpinerLoading />}>
          <ScrollToTop />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/news" component={News} />

            <Route exact path="/salerep" component={SaleRep} />
            <Route exact path="/contactus" component={ContactUs} />
            <Route exact path="/rfuw/:name" component={UniqueProduct} />
            <Route exact path="/switches" component={RfSwitches} />
            <Route exact path="/limiters" component={RfLimiter} />
            <Route exact path="/colimiters" component={ConnectorizedLimiters} />

            <Route exact path="/swdrivers" component={RfSwitchDrivers} />

            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </div>
    </>
  );
};

export default routes;
