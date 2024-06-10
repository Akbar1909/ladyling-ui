import { twMerge } from "tailwind-merge";
import Link from "next/link";
import ShareButtons from "./_components/ShareButtons";
import { formatTime, getEmojiType } from "@/utils/common";
import Emoji from "@/components/Emoji";
import LeaderBoard from "@/components/LeaderBoard";
import { Suspense } from "react";

const AttemptResultPage = async ({ params }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/attempt/details/${params.attemptId}`
  );
  const data = await response.json();

  const resKeyValue = Array.isArray(data?.responses)
    ? data.responses.reduce(
        (acc, cur) => ({ ...acc, [cur.questionId]: cur }),
        {}
      )
    : {};

  const questions = Array.isArray(data?.test?.questions)
    ? data.test.questions
    : [];

  const type = getEmojiType(data?.totalCount, data?.correctCount);

  return (
    <>
      <div className="flex flex-col gap-8 w-full">
        <div className="flex flex-row items-center justify-between">
          <ShareButtons type={type} />
          <Emoji type={type} />
          <div className="border border-gray-200 h-10 px-2 py-1">
            <h1 className="text-2xl font-medium">
              {formatTime(data?.spendedTime)}
            </h1>
          </div>
        </div>
        <Link href="/challenges" className="underline text-blue-400">
          Back to Challenge
        </Link>
        <article className="grid grid-cols-3 gap-2">
          <div className="flex text-center flex-col gap-1 scale-90">
            <h2 className="text-2xl font-bold">Total</h2>
            <p className="text-2xl font-medium">{data?.totalCount}</p>
          </div>

          <div className="flex text-center flex-col gap-1 text-green-400">
            <h2 className="text-2xl font-bold">Correct</h2>
            <p className="text-2xl font-medium">{data?.correctCount}</p>
          </div>

          <div className="flex text-center flex-col gap-1 text-red-400 scale-90">
            <h2 className="text-2xl font-bold">Wrong</h2>
            <p className="text-2xl font-medium">
              {data?.totalCount - data?.correctCount}
            </p>
          </div>
        </article>
        {data?.test?.status === "active" ? (
          questions.map(
            ({ text, imageUrl, createdAt, updatedAt, options, id }, i) => {
              const { selectedId, correctId } = resKeyValue[id] || {};

              return (
                <article key={i}>
                  <div>
                    <div className="flex flex-row items-center gap-1">
                      <span className="font-medium">{i + 1}.</span>
                      <p>{text}</p>
                    </div>
                  </div>

                  {Array.isArray(options) && options.length > 0 && (
                    <div className="flex flex-col gap-1">
                      {options.map((option, i) => {
                        const isCorrect = option.id === correctId;
                        const isMissed =
                          selectedId === undefined && option.isCorrect;
                        const isError =
                          option.id === selectedId && option.id !== correctId;

                        return (
                          <div
                            key={i}
                            className={twMerge(
                              "flex flex-row items-center gap-1 px-2 py-1",
                              isCorrect && "bg-green-300",
                              isError && "bg-red-400",
                              isMissed && "bg-slate-300"
                            )}
                          >
                            <span
                              className={twMerge(
                                isCorrect && "text-green-600",
                                isError && "text-red-600"
                              )}
                            >
                              {option.label}
                            </span>
                            <p
                              className={twMerge(
                                isCorrect && "text-green-600",
                                isError && "text-red-600"
                              )}
                            >
                              {option.text}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </article>
              );
            }
          )
        ) : data?.test?.status === "withPrize" ? (
          <Suspense
            fallback={
              <span role="alert" className="text-3xl text-center">
                Getting the information ⏰
              </span>
            }
          >
            <LeaderBoard testId={data?.test?.id} />
          </Suspense>
        ) : (
          <span role="alert" className="text-3xl text-center">
            Getting the information ⏰
          </span>
        )}

        <Link href="/challenges" className="underline text-blue-400">
          Back to Challenge
        </Link>
      </div>
    </>
  );
};

export default AttemptResultPage;
