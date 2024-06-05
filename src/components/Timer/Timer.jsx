"use client";
import React, { useState, useEffect } from "react";
import { formatTime } from "@/utils/common";
import cookie from "@/utils/cookie";

const Timer = () => {
  const [seconds, setSeconds] = useState(() => {
    const savedSeconds = cookie.get("seconds");
    return savedSeconds ? parseInt(savedSeconds, 10) : 0;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        const newSeconds = prevSeconds + 1;
        cookie.set("seconds", newSeconds);
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
