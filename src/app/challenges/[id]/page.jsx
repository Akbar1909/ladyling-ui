import { Suspense } from "react";
import StartButton from "./_components/StartButton";
import PageWrapper from "@/components/PageWrapper";
import LeaderBoard from "@/components/LeaderBoard";

export const revalidate = 0;
const Challenge = async (props) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/test/${props.params?.id}`
  );
  const data = await response.json();

  return (
    <PageWrapper>
      <div className="flex flex-col space-y-4 space-y-reverse items-center">
        <h1 className="order-last text-lg text-gray-700">
          Participate, Learn, and Win Prizes!
        </h1>
        <h2 className="text-5xl font-bold text-gray-900 sm:text-6xl">
          {data?.name}
        </h2>
      </div>
      <p className="mx-auto mt-6 max-w-xl text-pretty text-base/relaxed text-gray-700">
        {data.description}
      </p>

      <StartButton />

      <div className="mt-8 w-full">
        <Suspense
          fallback={
            <h1 className="text-3xl text-center">
              Getting the leader board ⏰
            </h1>
          }
        >
          <LeaderBoard testId={props.params.id} />
        </Suspense>
      </div>
    </PageWrapper>
  );
};

export default Challenge;
