import React, { useState, useEffect } from "react";
import { formatTime } from "@/utils/common";

const Timer = () => {
  const [seconds, setSeconds] = useState(() => {
    const savedSeconds = localStorage.getItem("seconds");
    return savedSeconds ? parseInt(savedSeconds, 10) : 0;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        const newSeconds = prevSeconds + 1;
        localStorage.setItem("seconds", newSeconds);
        return newSeconds;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full opacity-70 bg-yellow-300 items-center p-2">
      <h1 className="text-black text-center font-medium text-xl">
        {formatTime(seconds)}
      </h1>
    </div>
  );
};

export default Timer;
