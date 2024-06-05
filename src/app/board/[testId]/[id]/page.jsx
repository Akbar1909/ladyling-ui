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
import { twMerge } from "tailwind-merge";
import { Spinner } from "flowbite-react";
import Timer from "@/components/Timer";
import { getSpendedTime } from "@/utils/common";
import cookie from "@/utils/cookie";

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
    const questions = Object.entries(values).map(
      ([key, { optionId, questionId }]) => ({
        id: Number(questionId),
        selectedId: optionId,
      })
    );

    const preparedData = {
      questions,
      attemptId: Number(id),
      spendedTime: getSpendedTime(),
    };

    cookie.remove("seconds");

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

  const handlePrev = () => {
    if (page === 0) {
      return;
    }

    router.push(`${pathname}?page=${page - 1}`);
  };

  const handleOptionPick = (optionId, questionId) =>
    setValues((prev) => ({ ...prev, [page]: { optionId, questionId } }));

  // const questionsCount = Array.isArray(data?.questions)
  //   ? data.questions.length
  //   : 0;

  // const handlePaginationClick = (page) =>
  //   router.push(`${pathname}?page=${page}`);

  return (
    <BoardContext.Provider value={{ values, handleOptionPick, total, page }}>
      <div className="h-screen w-full px-4">
        <div className="mb-4">
          <Timer />
        </div>
        {isSuccess ? <QuestionsList {...data} total={total} /> : null}
        <div className="flex flex-row items-center pt-6">
          <div
            onClick={handlePrev}
            role="button"
            className={twMerge(
              "w-full  border border-gray-600 hover:bg-gray-100 cursor-pointer flex items-center justify-center h-16 relative bottom-0  font-medium text-2xl border-r-0",
              page === 0 &&
                "bg-gray-200 opacity-40 pointer-events-none cursor-not-allowed"
            )}
          >
            Prev
          </div>
          <div
            onClick={handleNext}
            aria-disabled={page === 0}
            role="button"
            className="w-full  border border-gray-600 hover:bg-gray-100 cursor-pointer flex items-center justify-center h-16 relative bottom-0  font-medium text-2xl"
          >
            {finishMutation.isPending && <Spinner className="mr-2" />}
            {page + 1 === total ? "Finish" : "Next"}
          </div>
        </div>
        {/* <div className="flex flex-row mt-4 flex-wrap gap-1">
          {new Array(questionsCount).fill("").map((_, i) => {
            return (
              <div
                className={twMerge(
                  "w-8 h-8 bg-white border flex items-center justify-center outline-none transition-all duration-200",
                  page === i && "bg-slate-400 text-white"
                )}
                key={i}
                role="button"
                onClick={() => handlePaginationClick(i)}
              >
                {i + 1}
              </div>
            );
          })}
        </div> */}
      </div>
    </BoardContext.Provider>
  );
};

export default BoardPage;
