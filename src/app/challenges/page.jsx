import React from "react";
import TestList from "./_components/TestList";
import PageWrapper from "@/components/PageWrapper";

export const revalidate = 0;
const Challenges = () => {
  return (
    <PageWrapper>
      <div className="flex flex-col space-y-4 space-y-reverse">
        <h1 className="order-last text-center text-lg text-gray-700">
          Participate, Learn, and Win Prizes!
        </h1>
        <h2 className="text-5xl font-bold text-center text-gray-900 sm:text-6xl">
          LadyLing Academy Challenges
        </h2>
      </div>
      <p className="mx-auto mt-6 max-w-xl text-center text-pretty text-base/relaxed text-gray-700">
        Welcome to the Challenges page! 🎉 Test your English skills with fun
        challenges in vocabulary, grammar, and more. Compete with others, climb
        the leaderboard, and win amazing prizes. Ready to learn and have fun?
        Let's go! 🚀
      </p>
      <div className="w-full mt-4">
        <TestList />
      </div>
    </PageWrapper>
  );
};

export default Challenges;
