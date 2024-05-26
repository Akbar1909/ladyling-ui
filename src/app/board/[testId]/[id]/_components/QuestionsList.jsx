"use client";
import QuestionsWidget from "@/components/Questions";
import { useSearchParams } from "next/navigation";
import React from "react";

const QuestionsList = ({ questions, total }) => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 0;

  return (
    <div className="py-6">
      <QuestionsWidget
        type="multiple-choice"
        total={total}
        current={page + 1}
        {...questions?.[page]}
      />
    </div>
  );
};

export default QuestionsList;
