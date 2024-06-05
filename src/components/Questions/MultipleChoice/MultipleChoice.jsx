import React from "react";
import Option from "./Option";

const MultipleChoice = ({
  id,
  testId,
  text,
  imageUrl,
  createdAt,
  updateAt,
  options,
  total,
  current,
}) => {
  return (
    <article className="bg-white">
      <div className="flex justify-between mb-2">
        <span className="text-gray-400 text-xs">
          Question {current}/{total}
        </span>
      </div>
      <p className="text-base text-left font-medium mb-6">{text}</p>

      <div className="flex flex-col gap-2">
        {Array.isArray(options) &&
          options.map((option, i) => (
            <Option questionId={id} key={i} {...option} />
          ))}
      </div>
    </article>
  );
};

export default MultipleChoice;
