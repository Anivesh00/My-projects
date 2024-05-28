import React, { useState } from "react";
import logo from "../icons/logo.jpg";
import "./Header.css";
import downArrow from "../icons/down-arrow.svg";
import hamburger from "../icons/hamburger.svg";
import cross from "../icons/cross.svg";

const Header = () => {
  const [toggleNavigation, setToggleNavigation] = useState(false);
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-ani-secondry-color shadow-ani-default-shadow sticky top-0 z-50">
      <a href="/" className="">
        <img
          src={logo}
          alt="logo"
          className="w-10 lg:w-14 aspect-square rounded-full shadow-ani-logo-shadow"
        />
      </a>
      <button
        className="block lg:hidden"
        onClick={() => setToggleNavigation(!toggleNavigation)}
      >
        <img
          src={toggleNavigation ? cross : hamburger}
          alt="hamburger"
          className="w-4 aspect-square"
        />
      </button>
      <div
        className={`gap-3 lg:gap-4 text-white text-lg font-medium ${
          toggleNavigation
            ? "flex absolute flex-col w-full bg-ani-secondry-color top-[72px] left-0 px-6 py-4"
            : "hidden "
        } lg:flex lg:relative lg:flex-row`}
      >
        <a href="/stop-watch">
          <li>
            stop watch
            <img
              src={downArrow}
              alt="down-arro"
              className="w-4 aspect-square "
            />
          </li>
        </a>
        <a href="/search">
          <li>
            search
            <img
              src={downArrow}
              alt="down-arro"
              className="w-4 aspect-square "
            />
          </li>
        </a>
        <a href="/chatbot">
          <li>
            chatbot
            <img
              src={downArrow}
              alt="down-arro"
              className="w-4 aspect-square "
            />
          </li>
        </a>
        <a href="/stop-watch2">
          <li>
            testing
            <img
              src={downArrow}
              alt="down-arro"
              className="w-4 aspect-square "
            />
          </li>
        </a>
      </div>
    </div>
  );
};

export default Header;
