import React from "react";
import { Row } from "react-bootstrap";
import EditEventsCard from "./EditEventsCard";
import { v4 as uuidv4 } from "uuid";
import Spinner from "components/layout/SpinerLoading";
const EditEvents = ({ events, setEdit }) => {
  if (!events) {
    return <Spinner />;
  }
  return (
    <Row>
      {events.map((event) => (
        <EditEventsCard key={uuidv4()} event={event} setEdit={setEdit} />
      ))}
    </Row>
  );
};

export default EditEvents;
