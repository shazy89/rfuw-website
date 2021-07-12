import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { selectCnt } from "./constants";
import FormField from "./FormField";
import { normalizeText } from "./constants";
import FranchisedDistributor from "./continents/FranchisedDistributor";
const SelectContinent = () => {
  const [select, setSelect] = useState("");
  const handleChange = (e) => {
    setSelect(normalizeText(e.target.value));
  };

  return (
    <section>
      <Container className="u-margin-top-3">
        <FormField setSelect={setSelect} handleChange={handleChange} />
        <Row className="sales__row">{selectCnt[select]}</Row>
        <Row className="sales__row">
          <FranchisedDistributor />
        </Row>
      </Container>
    </section>
  );
};

export default SelectContinent;
