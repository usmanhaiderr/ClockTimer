import React, { useState, useEffect, useRef } from 'react';

function Timer() {
  const [time, setTime] = useState();
  const timeRef = useRef();
  const getTimer = () => {
    timeRef.current = setInterval(() => {
      const timer = new Date().toLocaleTimeString();
      setTime(timer);
    }, 1000);
  };

  useEffect(() => {
    getTimer();
    return () => clearInterval(timeRef.current);
  }, []);

  console.log('=====>', timeRef.current);
  return (
    <>
      <div>{time}</div>
      <button onClick={() => clearInterval(timeRef.current)}>Pause</button>
    </>
  );
}

export default Timer;
