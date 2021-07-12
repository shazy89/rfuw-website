import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Alert from "components/layout/Alert";
const Dashboard = ({ alerts }) => {
  return (
    <div>
      <h1 className="u-center-text u-margin-top-3">
        Welcome to the RfuW Dashboard
      </h1>
      {alerts && <Alert />}
      <Container className="u-margin-top-3">
        <Row>
          <Col>
            <Link className="font__size-4" to="/dashboard/news">
              News
            </Link>
          </Col>
          <Col>
            <Link className="font__size-4" to="/dashboard/switches">
              Rf Switches
            </Link>
          </Col>
          <Col>
            <Link className="font__size-4" to="/dashboard/limiter">
              Rf Limiter
            </Link>
          </Col>
          <Col>
            <Link className="font__size-4" to="/dashboard/swdrivers">
              Rf Switch Drivers
            </Link>
          </Col>
          <Col>
            <Link className="font__size-4" to="/dashboard/colimiters">
              Connectorized Limiters
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
const mapStateProps = (state) => ({
  alerts: state.alert
});
export default connect(mapStateProps)(Dashboard);
