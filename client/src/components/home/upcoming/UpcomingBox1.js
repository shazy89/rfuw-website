import React from "react";
import { Col } from "react-bootstrap";

const UpcomingBox1 = ({ event }) => {
  return (
    <Col sm={6} className="upcoming__box-1">
      <div
        style={{
          backgroundImage: `url(${event.imageUrl})`
        }}
        className="upcoming__sec-1"
      >
        <div className="upcoming__sec-1--text">
          <h3 className="font__size-6 welcome__header upcoming__sec-1--text-header">
            {event && event.title}
          </h3>
          <p className="upcoming__sec-1--text-par font__size-3">
            {event && event.content}
          </p>
        </div>
      </div>
    </Col>
  );
};

export default UpcomingBox1;
