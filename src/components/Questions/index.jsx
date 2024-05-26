import React from "react";
import MultipleChoice from "./MultipleChoice";

const QuestionsWidget = ({ type, ...rest }) => {
  switch (type) {
    case "multiple-choice":
      return <MultipleChoice {...rest} />;
    default:
      return null;
  }
};

export default QuestionsWidget;
