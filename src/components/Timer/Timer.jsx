"use client";
import React, { useState, useEffect } from "react";
import { formatTime } from "@/utils/common";
import useGetSpendedTime from "@/hooks/api/useGetSpendedTime";
import { useParams } from "next/navigation";

const Timer = () => {
  const { id } = useParams();
  const [seconds, setSeconds] = useState(0);

  const { data, isSuccess } = useGetSpendedTime(id);

  useEffect(() => {
    if (!isSuccess) {
      return;
    }
    setSeconds(data);
  }, [data, isSuccess]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        const newSeconds = prevSeconds + 1;
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
