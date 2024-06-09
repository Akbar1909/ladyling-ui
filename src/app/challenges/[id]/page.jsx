import { Suspense } from "react";
import StartButton from "./_components/StartButton";
import PageWrapper from "@/components/PageWrapper";
import LeaderBoard from "@/components/LeaderBoard";
import ChallengeDetail from "./_components/ChallengeDetail";

export const revalidate = 0;
const Challenge = async (props) => {
  return (
    <PageWrapper>
      <div className="min-w-[300px] flex justify-center flex-col items-center">
        <Suspense
          fallback={
            <span role="alert" className="text-3xl text-center">
              Getting the information ⏰
            </span>
          }
        >
          <ChallengeDetail testId={props.params.id} />
        </Suspense>

        <StartButton />

        <div className="mt-8 w-full">
          <Suspense
            fallback={
              <span role="alert" className="text-3xl text-center">
                Getting the leader board ⏰
              </span>
            }
          >
            <LeaderBoard testId={props.params.id} />
          </Suspense>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Challenge;
