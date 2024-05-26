import React, { useContext } from "react";
import { BoardContext } from "@/app/board/[testId]/[id]/context";
import { twMerge } from "tailwind-merge";

const Option = ({ label, isCorrect, text, id, questionId, ...rest }) => {
  const { values, handleOptionPick } = useContext(BoardContext);
  console.log(values, questionId, id);
  return (
    <div
      role="button"
      onClick={() => handleOptionPick(id, questionId)}
      className={twMerge(
        "flex bg-white cursor-pointer border border-gray-300 px-2 py-3 transition-all duration-150",
        values[questionId] === id && "bg-gray-200"
      )}
    >
      <div className="text-gray-400 text-base">
        <span>{label}.</span>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Option;