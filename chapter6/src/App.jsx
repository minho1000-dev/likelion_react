import { useEffect, useRef, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import StopWatchDisplay from "./components/TimerDisplay";
import StopWatchController from "./components/TimerController";

const INITIAL_TIME = 10;

function App() {
  const interverId = useRef();
  const [time, setTime] = useState(INITIAL_TIME);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (time === 0) {
      setIsRunning(false);
      setTime(INITIAL_TIME);
      clearInterval(interverId.current);
    }
  }, [time]);

  const handleStart = () => {
    if (!isRunning) {
      interverId.current = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      setIsRunning(true);
    }
  };

  const handlePause = () => {
    clearInterval(interverId.current);
    setIsRunning(false);
  };

  return (
    <div className="timerAppContainer">
      <Header />
      <StopWatchDisplay time={time} />
      <StopWatchController
        isRunning={isRunning}
        onStart={handleStart}
        onPause={handlePause}
      />
    </div>
  );
}

export default App;
