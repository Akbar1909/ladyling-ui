import React from "react";
import { twMerge } from "tailwind-merge";

const Empty = ({ className }) => {
  return (
    <div
      className={twMerge(
        "w-full flex items-center justify-center py-6",
        className
      )}
    >
      Empty
    </div>
  );
};

export default Empty;
