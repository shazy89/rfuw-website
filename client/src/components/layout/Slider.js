import React from "react";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 as uuidv4 } from "uuid";
import { sliderSettings } from "./constants";
import Spinner from "./SpinerLoading";

const Slider = ({ items, sliderCard: Component, loading }) => {
  return (
    <>
      {loading ? (
        <Spinner />
      ) : items ? (
        <SlickSlider aria-hidden="true" {...sliderSettings}>
          {items.map((item) => (
            <Component key={uuidv4()} item={item} />
          ))}
        </SlickSlider>
      ) : (
        <h1>No DATA</h1>
      )}
    </>
  );
};

export default Slider;
