import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import api from "utils/api";
import { Container, Row, Col, Button } from "react-bootstrap";
import Spinner from "components/layout/SpinerLoading";
import { X, Edit2 } from "react-feather";
import { getEvents, clearData } from "actions/events";
import EditEvents from "./EditEvents";
import UpcomingBox1 from "./upcoming/UpcomingBox1";
import UpcomingBox2 from "./upcoming/UpcomingBox2";
import UpcomingBox3 from "./upcoming/UpcomingBox3";

const Upcoming = ({ isAuthenticated, getEvents, events, loading }) => {
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    getEvents();
  }, []);

  const handleEdit = () => {
    edit ? setEdit(false) : setEdit(true);
  };

  return (
    <section className="u-padding--2 upcoming u-margin-top-4">
      <div>
        <h2 className="font__size-5 text-center welcome__header">
          Upcoming Events
        </h2>
        <h4 className="text-center">Come meet us</h4>
      </div>
      <Container fluid className="u-margin-top-2 upcoming__container">
        {loading ? (
          <Spinner />
        ) : (
          <>
            {isAuthenticated ? (
              <Button variant="link" onClick={handleEdit}>
                Edit{" "}
                {!edit ? (
                  <Edit2 className="news__card--icon" size={20} />
                ) : (
                  <X className="news__card--icon" size={20} />
                )}
              </Button>
            ) : null}
            {edit ? (
              <EditEvents events={events} setEdit={setEdit} />
            ) : (
              <Row>
                <UpcomingBox1 event={events[0]} />
                <Col sm={6} className="upcoming__box-2">
                  <div className="upcoming__sec-2">
                    <UpcomingBox2 event={events[1]} />
                    <div className=" upcoming__sec-2--box2">
                      <Row className="row_options">
                        <UpcomingBox3 event={events[2]} />
                        <UpcomingBox3 event={events[3]} />
                      </Row>
                    </div>
                  </div>
                </Col>
              </Row>
            )}
          </>
        )}

        <div className="rfuw_center u-margin-top-2">
          <Button
            href="mailto:sales@rfuw-engineering.com"
            className="rfu_button"
          >
            Email for info
          </Button>
        </div>
      </Container>
    </section>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    events: state.events.events,
    loading: state.events.loading
  };
};

export default connect(mapStateToProps, { getEvents, clearData })(Upcoming);
