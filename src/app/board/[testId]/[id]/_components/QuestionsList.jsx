import QuestionsWidget from "@/components/Questions";
import React from "react";

const QuestionsList = ({ questions, total, page }) => {
  return (
    <QuestionsWidget
      type="multiple-choice"
      total={total}
      current={page + 1}
      {...questions?.[page]}
    />
  );
};

export default QuestionsList;
