import React from "react";

import { Col } from "react-bootstrap";

const UpcomingBox3 = ({ event }) => {
  return (
    <Col>
      <div
        className="u-padding--05 event-box-small"
        style={{
          backgroundImage: `url(${event.imageUrl})`
        }}
      >
        <div className="upcoming__sec-1--text">
          <h5 className="par__text--white">{event && event.title}</h5>
          <p className="par__text--white">{event && event.content}</p>
        </div>
      </div>
    </Col>
  );
};

export default UpcomingBox3;
