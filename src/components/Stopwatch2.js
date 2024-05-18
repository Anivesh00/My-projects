import React, { useEffect, useState } from "react";

const Stopwatch2 = () => {
  const [milliseconds, setMilliseconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (running) {
      intervalId = setInterval(() => {
        setMilliseconds((prevMilliseconds) => {
          if (prevMilliseconds >= 99) {
            setSeconds((prevSeconds) => {
              if (prevSeconds >= 59) {
                setMinutes((prevMinutes) => prevMinutes + 1);
                return 0;
              }
              return prevSeconds + 1;
            });
            return 0;
          } else {
            return prevMilliseconds + 1;
          }
        });
      }, 10);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [running]);

  const handleStartPause = () => {
    setRunning((runningStatus) => !runningStatus);
  };
  const handleReset = () => {
    setRunning(false);
    setMilliseconds(0);
    setSeconds(0);
    setMinutes(0);
  };

  return (
    <div className="bg-ani-primary-color  flex w-full h-[100vh] justify-center items-center">
      <div className="bg-ani-secondry-light-color px-12 py-8 w-fit flex flex-col gap-28 rounded-lg shadow-ani-default-shadow">
        <div className="text-5xl flex gap-6 leading-tight">
          <span className="leading-snug">
            {minutes.toString().padStart(2, "0")}
          </span>{" "}
          :
          <span className="leading-snug">
            {seconds.toString().padStart(2, "0")}
          </span>
          :
          <span className="leading-snug">
            {milliseconds.toString().padStart(2, "0")}
          </span>
        </div>
        <div className="flex justify-evenly uppercase gap-8">
          <button
            className={`uppercase px-10 py-4 rounded-full text-xl font-bold hover:scale-110 transition duration-500 ease-in-out ${
              running
                ? "bg-ani-secondry-color text-white"
                : "bg-ani-primary-light-color text-white"
            }`}
            onClick={handleStartPause}
          >
            {!running ? "Start" : "Pause"}
          </button>

          <button
            className="uppercase px-10 py-4  rounded-full bg-ani-primary-color text-xl font-bold text-white hover:scale-110 transition ease-in-out duration-500"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch2;
