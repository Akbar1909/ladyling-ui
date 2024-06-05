import { twMerge } from "tailwind-merge";
import useBoardContext from "@/context/BoardContext/useBoardContext";

const Option = ({ label, isCorrect, text, id, questionId }) => {
  const { values, handleOptionPick, page } = useBoardContext();

  return (
    <div
      role="button"
      onClick={() => handleOptionPick(id, questionId)}
      className={twMerge(
        "flex bg-white cursor-pointer border border-gray-300 px-2 py-3 transition-all duration-150",
        values[page]?.optionId === id && "bg-gray-200"
      )}
    >
      <div className="text-gray-800 text-base">
        <span>{label}.</span>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Option;
