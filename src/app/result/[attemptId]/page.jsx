import PageWrapper from "@/components/PageWrapper";
import React from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { FacebookShareButton, FacebookIcon } from "next-share";
import ShareButtons from "./_components/ShareButtons";

const AttemptResultPage = async ({ params }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/attempt/details/${params.attemptId}`,
    { cache: "no-cache" }
  );
  const data = await response.json();

  return (
    <PageWrapper>
      <div className="flex flex-col gap-8 w-full">
        <ShareButtons />
        <article className="grid grid-cols-2 gap-2">
          <div className="flex text-center flex-col gap-1 col-span-2">
            <h2 className="text-2xl font-bold">Total</h2>
            <p className="text-2xl font-medium">{data?.totalCount}</p>
          </div>

          <div className="flex text-center flex-col gap-1 text-green-400">
            <h2 className="text-2xl font-bold">Correct</h2>
            <p className="text-2xl font-medium">{data?.correctCount}</p>
          </div>

          <div className="flex text-center flex-col gap-1 text-red-400">
            <h2 className="text-2xl font-bold">Wrong</h2>
            <p className="text-2xl font-medium">
              {data?.totalCount - data?.correctCount}
            </p>
          </div>
        </article>
        {data.responses.map(({ question, selectedId, correctId }, i) => {
          const { text, imageUrl, createdAt, updatedAt, options } = question;

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
                    const isError =
                      option.id === selectedId && option.id !== correctId;
                    return (
                      <div
                        key={i}
                        className={twMerge(
                          "flex flex-row items-center gap-1 px-2 py-1",
                          isCorrect && "bg-green-300",
                          isError && "bg-red-400"
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
        })}

        <Link href="/challenges" className="underline text-blue-400">
          Back to Challenges
        </Link>
      </div>
    </PageWrapper>
  );
};

export default AttemptResultPage;
