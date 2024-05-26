"use client";
import { useState } from "react";
import QuestionsList from "./_components/QuestionsList";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getTestByIdWidthQuestions } from "@/data/test";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { BoardContext } from "./context";
import { finishTest } from "@/data/attempt";
import PageWrapper from "@/components/PageWrapper";

const BoardPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { testId, id } = useParams();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 0;

  const [values, setValues] = useState({});

  const { data, isLoading, isSuccess } = useQuery({
    queryFn: () => getTestByIdWidthQuestions(testId),
    queryKey: ["questions", { testId }],
    select: (res) => res.data,
  });

  const finishMutation = useMutation({
    mutationFn: finishTest,
    mutationKey: ["finish-mutation"],
    onSuccess: (res) => {
      router.replace(`/result/${id}`);
    },
  });

  const handleFinish = () => {
    const questions = Object.entries(values).map(([key, value]) => ({
      id: Number(key),
      selectedId: value,
    }));

    const preparedData = {
      questions,
      attemptId: Number(id),
    };

    finishMutation.mutate(preparedData);
  };

  const total = Array.isArray(data?.questions) ? data.questions.length : 0;

  const handleNext = () => {
    if (page + 1 === total) {
      handleFinish();
      return;
    }

    router.push(`${pathname}?page=${page + 1}`);
  };

  const handleOptionPick = (optionId, questionId) =>
    setValues((prev) => ({ ...prev, [questionId]: optionId }));

  return (
    <BoardContext.Provider value={{ values, handleOptionPick, total }}>
      <PageWrapper>
        <div className="h-screen w-full px-4">
          {isSuccess ? <QuestionsList {...data} total={total} /> : null}
          <div
            onClick={handleNext}
            role="button"
            className="w-full  border border-gray-600 hover:bg-gray-100 cursor-pointer flex items-center justify-center h-16 relative bottom-0  font-medium text-2xl"
          >
            {page + 1 === total ? "Finish" : "Next Question"}
          </div>
        </div>
      </PageWrapper>
    </BoardContext.Provider>
  );
};

export default BoardPage;
