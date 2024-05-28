import React, { useRef } from "react";
import logo from "../icons/logo.jpg";
import NavigationButton from "./NavigationButton";

const Home = () => {
  const carouselRef = useRef(null);
  const cardWidth = 32 * 4; // 32px * 4 (width of card in rem if tailwind uses default font-size of 16px)
  const gapWidth = 3 * 4; // 3px * 4 (gap in rem)

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
    <div className="container w-full py-14 px-12 text-white flex flex-col gap-10">
      <h2 className="font-bold text-2xl text-center">
        Welcome To the learning project website
      </h2>
      <div className="w-full border-2 border-white rounded-lg h-[400px] px-4 pr-0 py-4 shadow-ani-default-shadow flex flex-col">
        <div className="row flex gap-4 items-center relative overflow-x-auto">
          <h3 className="uppercase font-bold text-lg w-1/2">May :</h3>
          <NavigationButton
            onClickLeft={scrollLeft}
            onClickRight={scrollRight}
          />
          <div
            ref={carouselRef}
            className="carousel flex gap-3 overflow-x-auto relative"
          >
            <a
              href="/stop-watch"
              className="carouselCard relative flex-shrink-0"
            >
              <img
                src={logo}
                alt="card1"
                className="w-32 h-32 border border-white rounded-md"
              />
              <h4 className="absolute capitalize font-bold bottom-0 left-0 right-0 text-center py-2 backdrop-blur-md mx-[2px] mb-[2px]">
                stop watch
              </h4>
            </a>
            <a href="/search" className="carouselCard relative flex-shrink-0">
              <img
                src={logo}
                alt="card2"
                className="w-32 h-32 border border-white rounded-md"
              />
              <h4 className="absolute capitalize font-bold bottom-0 left-0 right-0 text-center py-2">
                search
              </h4>
            </a>
            {/* Add more cards here as needed */}
            <a href="/search" className="carouselCard relative flex-shrink-0">
              <img
                src={logo}
                alt="card2"
                className="w-32 h-32 border border-white rounded-md"
              />
              <h4 className="absolute capitalize font-bold bottom-0 left-0 right-0 text-center py-2">
                search
              </h4>
            </a>
            <a href="/search" className="carouselCard relative flex-shrink-0">
              <img
                src={logo}
                alt="card2"
                className="w-32 h-32 border border-white rounded-md"
              />
              <h4 className="absolute capitalize font-bold bottom-0 left-0 right-0 text-center py-2">
                search
              </h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
