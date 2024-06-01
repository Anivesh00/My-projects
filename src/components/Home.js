import React, { useRef, useEffect, useState } from "react";
import logo from "../icons/logo.jpg";
import { Navigationdata } from "../JSON Data/data";
import NavigationButton from "./NavigationButton";

const Home = () => {
  const carouselRef1 = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [gapWidth, setGapWidth] = useState(0);

  // Update card width and gap width based on screen size
  const updateDimensions = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setCardWidth(52 * 4); // 52rem in px (for large screens)
      setGapWidth(8 * 4); // 8rem in px
    } else if (width >= 768) {
      setCardWidth(40 * 4); // 40rem in px (for medium screens)
      setGapWidth(4 * 4); // 4rem in px
    } else {
      setCardWidth(32 * 4); // 32rem in px (for small screens)
      setGapWidth(3 * 4); // 3rem in px
    }
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className="container w-full py-14 px-12 lg:px-[60px] mx-auto text-white flex flex-col gap-10">
      <h2 className="font-bold text-2xl text-center">
        Welcome To the learning project website
      </h2>
      <div className="w-full border-2 gap-3 md:gap-4 lg:gap-8 border-white rounded-lg  px-4 pr-0 py-4 shadow-ani-default-shadow flex flex-col">
        <div className="row flex gap-4 items-center relative overflow-x-auto">
          <h3 className="uppercase font-bold text-lg w-full md:w-1/3">May :</h3>
          <NavigationButton
            carouselRef={carouselRef1}
            cardWidth={cardWidth}
            gapWidth={gapWidth}
          />
          <div
            ref={carouselRef1}
            className="carousel flex gap-3 md:gap-4 lg:gap-8 overflow-x-auto relative noScrollbar md:w-2/3"
          >
            {Navigationdata?.map((item, index) => (
              <a
                key={index}
                href={item?.url}
                className="carouselCard relative flex-shrink-0 group border border-white rounded-md"
              >
                <img
                  src={item?.svg}
                  alt="card1"
                  className="w-32 md:w-40 lg:w-52 h-32 md:h-40 lg:h-52 "
                />
                <h4 className="absolute block lg:hidden lg:group-hover:block capitalize font-bold bottom-0 left-0 right-0 text-center py-2 backdrop-blur-md  mx-[2px] mb-[2px]">
                  {item?.displayName}
                </h4>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
