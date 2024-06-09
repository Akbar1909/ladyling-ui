import { formatTime } from "@/utils/common";
import React from "react";
import { cookies } from "next/headers";
import { twMerge } from "tailwind-merge";

const LeaderBoard = async ({ testId }) => {
  const cookieStore = cookies();
  const meId = cookieStore.get("temp")?.value;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/leaderboard/test/${testId}/${meId}`,
    { next: { tags: ["leader-board"] } }
  );
  const data = await response.json();

  if (!Array.isArray(data)) {
    return <></>;
  }

  if (data.length === 0) {
    return <></>;
  }

  const icons = {
    1: "🥇",
    2: "🥈",
    3: "🥉",
    4: "⭐️",
    5: "⚪️",
  };

  return (
    <div className="w-full text-xl">
      <div className="w-full flex items-center border-b px-3">
        <span className="w-8 font-medium">N</span>
        <span className="flex-1 font-medium">Name</span>
        <span className="w-20 text-left font-medium">Score</span>
        <span className="w-20 text-left font-medium">Time</span>
      </div>
      {data.map(({ username, rank, userId, spendedTime, score }, i) => {
        const isYou = parseInt(meId, 10) === userId;

        return (
          <article
            key={i}
            className={twMerge(
              "w-full flex flex-row items-center py-2 border-b last:border-none px-3",
              isYou && "bg-yellow-300"
            )}
          >
            <span className="w-8">{icons[i + 1] ?? rank}</span>
            <span className="flex-1">{!isYou ? username : "You"}</span>
            <span className="w-20">{score}</span>
            <span className="w-20">{formatTime(spendedTime)}</span>
          </article>
        );
      })}
    </div>
  );
};

export default LeaderBoard;
