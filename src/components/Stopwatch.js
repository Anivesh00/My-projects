import React, { useEffect, useState } from "react";

const Stopwatch = () => {
  const [milliseconds, setMilliseconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    let id;

    if (isRunning) {
      id = setInterval(() => {
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
          }
          return prevMilliseconds + 1;
        });
      }, 10);
    }

    return () => {
      clearInterval(id);
    };
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
    setIntervalId(null);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setMilliseconds(0);
    setSeconds(0);
    setMinutes(0);
    clearInterval(intervalId);
    setIntervalId(null);
  };

  return (
    <div>
      <div>
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}:
        {String(milliseconds).padStart(2, "0")}
      </div>
      <div>
        {isRunning ? (
          <button onClick={pauseTimer}>Pause</button>
        ) : (
          <button onClick={startTimer}>Start</button>
        )}
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
