import React from "react";

const UpcomingBox2 = ({ event }) => {
  return (
    <div
      className="upcoming__sec-2--box1"
      style={{
        backgroundImage: `url(${event.imageUrl})`
      }}
    >
      <div className="upcoming__sec-1--text">
        <h3 className="font__size-4 welcome__header upcoming__sec-1--text-header">
          {event && event.title}
        </h3>
        <p className="upcoming__sec-1--text-par font__size-2">
          {event && event.content}
        </p>
      </div>
      <div className="upcoming__sec-1--text"></div>
    </div>
  );
};

export default UpcomingBox2;
