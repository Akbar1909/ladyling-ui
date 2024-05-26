import StartButton from "./_components/StartButton";
import PageWrapper from "@/components/PageWrapper";

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
    </PageWrapper>
  );
};

export default Challenge;
