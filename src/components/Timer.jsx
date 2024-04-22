import React from "react";
import { useEffect, useState } from "react";

export default function Timer(props) {
  const [seconds, setSeconds] = useState(props.initialSeconds);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    setSeconds(props.initialSeconds);
  }, [props.questionChange]);

  useEffect(() => {
    let intervalId;
    if (isRunning && seconds > 0) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, seconds]);

  //   const startTimer = () => {
  //     setIsRunning(true);
  //   };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(props.initialSeconds);
  };

  return (
    <div>
      <h2>Timer: {seconds} seconds</h2>
      {/* <button onClick={startTimer}>Start</button> */}
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
