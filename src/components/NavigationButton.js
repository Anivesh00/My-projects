import React from "react";
import arrow from "../icons/right-arrow.svg";

const NavigationButton = ({ onClickLeft, onClickRight }) => {
  return (
    <div className="absolute flex justify-between top-1/2 left-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2">
      <button
        className="bg-white rounded-full p-2 cursor-pointer"
        onClick={onClickLeft}
      >
        <img src={arrow} alt="left navigate" className="w-6 h-6 rotate-180" />
      </button>
      <button
        className="bg-white rounded-full p-2 cursor-pointer"
        onClick={onClickRight}
      >
        <img src={arrow} alt="right navigate" className="w-6 h-6" />
      </button>
    </div>
  );
};

export default NavigationButton;
