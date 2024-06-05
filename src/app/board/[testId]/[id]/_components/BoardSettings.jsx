"use client";
import { Suspense, useState } from "react";
import { useMutation } from "@tanstack/react-query";
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

const BoardSettings = ({ children, total }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { id } = useParams();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 0;

  const [values, setValues] = useState({});

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

    cookie.remove("seconds", { path: "/" });

    finishMutation.mutate(preparedData);
  };

  const handleNext = () => {
    if (finishMutation.isPending) {
      return;
    }
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

    router.replace(`${pathname}?page=${page - 1}`);
  };

  const handleOptionPick = (optionId, questionId) =>
    setValues((prev) => ({ ...prev, [page]: { optionId, questionId } }));

  return (
    <BoardContext.Provider value={{ values, handleOptionPick, total, page }}>
      <div className="h-screen w-full px-4">
        <div className="mb-4">
          <Timer />
        </div>
        <Suspense
          fallback={
            <h1 className="text-3xl text-center">Getting questions ⏰</h1>
          }
        >
          {children}
        </Suspense>
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
      </div>
    </BoardContext.Provider>
  );
};

export default BoardSettings;
