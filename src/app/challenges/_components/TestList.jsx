import Empty from "@/components/Empty";
import TestCard from "./TestCard";

const TestList = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/test`);
  const data = await response.json();

  const preparedTests = (Array.isArray(data) ? data : []).reduce(
    (acc, cur) => ({ ...acc, [cur.status]: [...(acc[cur.status] || []), cur] }),
    {}
  );

  const { upcoming = [], active = [], withPrize = [] } = preparedTests || {};

  return (
    <ul className="space-y-8">
      <li className="space-y-4">
        <h2 className="text-lg text-left font-bold text-gray-900 sm:text-xl">
          Current Challenges
          <span className="text-gray-500 ml-2">({active.length})</span>
        </h2>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {active.length === 0 ? (
            <Empty />
          ) : (
            active.map((test, i) => <TestCard key={i} {...test} />)
          )}
        </ul>
      </li>
      <li className="space-y-4">
        <h2 className="text-lg text-left font-bold text-gray-900 sm:text-xl">
          Challenges With Prizes
          <span className="text-gray-500 ml-2">({withPrize.length})</span>
        </h2>
        {withPrize.length === 0 ? (
          <Empty />
        ) : (
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {withPrize.map((test, i) => (
              <TestCard key={i} {...test} />
            ))}
          </ul>
        )}
      </li>

      <li className="space-y-4">
        <h2 className="text-lg text-left font-bold text-gray-900 sm:text-xl">
          Upcoming Challenges
          <span className="text-gray-500 ml-2">({upcoming.length})</span>
        </h2>

        {upcoming.length === 0 ? (
          <Empty />
        ) : (
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {upcoming.map((test, i) => (
              <TestCard key={i} {...test} />
            ))}
          </ul>
        )}
      </li>
    </ul>
  );
};

export default TestList;
