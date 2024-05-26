import TestCard from "./TestCard";

const TestList = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/test`);
  const data = await response.json();

  const preparedTests = (Array.isArray(data) ? data : []).reduce(
    (acc, cur) => ({ ...acc, [cur.status]: [...(acc[cur.status] || []), cur] }),
    {}
  );

  const { upcoming, active = [], closed } = preparedTests || {};

  return (
    <ul className="space-y-8">
      <li className="space-y-4">
        <h2 className="text-lg text-left font-bold text-gray-900 sm:text-xl">
          Current Challenges
        </h2>
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {active.map((test, i) => (
            <TestCard key={i} {...test} />
          ))}
        </ul>
      </li>

      <li className="space-y-4">
        <h2 className="text-lg text-left font-bold text-gray-900 sm:text-xl">
          Upcoming Challenges
        </h2>
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {upcoming.map((test, i) => (
            <TestCard key={i} {...test} />
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default TestList;
