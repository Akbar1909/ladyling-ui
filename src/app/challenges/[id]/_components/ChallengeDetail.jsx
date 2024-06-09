const ChallengeDetail = async ({ testId }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/test/${testId}`
  );
  const data = await response.json();
  return (
    <>
      <h2 className="text-5xl font-bold text-gray-900 sm:text-6xl">
        {data?.name}
      </h2>

      <p className="mx-auto mt-6 max-w-xl text-pretty text-base/relaxed text-gray-700">
        {data.description}
      </p>
    </>
  );
};

export default ChallengeDetail;
