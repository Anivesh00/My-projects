import React from "react";
import arrow from "../icons/right-arrow.svg";

const NavigationButton = ({ carouselRef, cardWidth, gapWidth }) => {
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -(cardWidth + gapWidth),
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: cardWidth + gapWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex">
      <button
        className="bg-white rounded-full p-2 cursor-pointer absolute z-10 -translate-y-1/2"
        onClick={scrollLeft}
      >
        <img src={arrow} alt="left navigate" className="w-6 h-6 rotate-180" />
      </button>
      <button
        className="bg-white rounded-full p-2 cursor-pointer absolute -translate-y-1/2 right-7 z-10"
        onClick={scrollRight}
      >
        <img src={arrow} alt="right navigate" className="w-6 h-6" />
      </button>
    </div>
  );
};

export default NavigationButton;
