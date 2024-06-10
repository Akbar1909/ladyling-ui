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

      {false ? (
        <p className="mx-auto mt-6 max-w-xl text-pretty text-base/relaxed text-gray-700">
          {data.description}
        </p>
      ) : (
        <div className="mx-auto mt-6 max-w-xl text-pretty text-base/relaxed text-gray-700">
          <p>
            Test your vocabulary with fun emoji clues! Compete for fantastic
            prizes!
          </p>
          <h3 className="font-bold my-2 text-xl">Prizes</h3>
          <ul>
            <li className="flex flex-row gap-2">
              <span className="font-medium">1st Place:</span>{" "}
              <span>100 ming so'm</span>
            </li>
            <li className="flex flex-row gap-2">
              <span className="font-medium">2nd Place:</span>
              <span>70 ming so'm</span>
            </li>
            <li className="flex flex-row gap-2">
              <span className="font-medium">3rd Place:</span>
              <span>50 ming so'm</span>
            </li>
          </ul>
          <h3 className="font-bold my-2 text-xl">Deadline</h3>
          <p>
            Submit your answers between <b>11.06.2024</b> and <b>15.06.2024</b>{" "}
            to be eligible for prizes.
          </p>
        </div>
      )}
    </>
  );
};

export default ChallengeDetail;
