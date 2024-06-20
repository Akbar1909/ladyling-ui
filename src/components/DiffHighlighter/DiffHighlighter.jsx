// components/DiffHighlighter.js
import React from "react";
import { diffWords } from "diff";

const DiffHighlighter = ({ string1, string2 }) => {
  const getHighlightedDiffs = (str1, str2) => {
    const diff = diffWords(str1, str2);
    let addedCount = 0;
    let removedCount = 0;

    const diffElements = diff.map((part, index) => {
      const className = part.added
        ? "bg-green-200"
        : part.removed
        ? "bg-red-200"
        : "";

      if (part.added) addedCount += part.value.length;
      if (part.removed) removedCount += part.value.length;

      return (
        <span key={index} className={className}>
          {part.value}
        </span>
      );
    });

    const totalLength = Math.max(str1.length, str2.length);
    const diffPercentage = ((addedCount + removedCount) / totalLength) * 100;

    return { diffElements, diffPercentage: diffPercentage.toFixed(2) };
  };

  const { diffElements, diffPercentage } = getHighlightedDiffs(
    string1,
    string2
  );

  return (
    <div>
      <div className="mb-4">
        <strong>Difference Percentage:</strong> {diffPercentage}%
      </div>
      <div>{diffElements}</div>
    </div>
  );
};

export default DiffHighlighter;
