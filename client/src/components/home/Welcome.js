import React from "react";
import { connect } from "react-redux";
import SliderCard from "./SliderCard";
import Slider from "../layout/Slider";

const Welcome = ({ featuredProducts, loading }) => {
  return (
    <section className="u-padding--3">
      <div className="u-margin-top-2">
        <p className="welcome__text u-margin-top-2 font__size-2">
          Purveyors of the industry's leading RF & Microwave Switches and
          Limiters brought to you from the world's most business friendly
          environment. Our high reliability RF Switches and Limiters offer the
          world's highest power ratings for SMT style devices. Based on proven
          hybrid assembly technology widely used in high reliability
          applications such as radar and communication systems. "No hassles, no
          bureaucracy, no twenty questions!" Just fast, polite customer service
          with an ironclad guarantee of product support commitment throughout
          your product life cycle. If the RF industry's merger and acquisition
          game has left you exhausted and confused, we welcome you to our
          alternative reality.
        </p>
      </div>
      <div className="u-margin-top-4 ">
        <Slider
          items={featuredProducts}
          loading={loading}
          sliderCard={SliderCard}
        />
      </div>
    </section>
  );
};
const mapStateToProps = (state) => {
  return {
    featuredProducts: state.featuredItems.products,
    loading: state.featuredItems.loading
  };
};
export default connect(mapStateToProps)(Welcome);
