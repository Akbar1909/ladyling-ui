import React from "react";
import BoardSettings from "./_components/BoardSettings";
import QuestionsList from "./_components/QuestionsList";

const BoardPage = async ({
  params: { testId },
  searchParams: { page = 0 },
}) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/test/questions/${testId}`
  );
  const data = await res.json();

  const total = Array.isArray(data?.questions) ? data.questions.length : 0;

  return (
    <BoardSettings total={total}>
      <QuestionsList page={page} total={total} {...data} />
    </BoardSettings>
  );
};

export default BoardPage;
