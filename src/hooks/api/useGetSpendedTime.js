import { useQuery } from "@tanstack/react-query";
import { getAttemptSpendedTime } from "@/data/attempt";

const useGetSpendedTime = (id) => {
  const { data, ...rest } = useQuery({
    queryKey: ["spended-time", { id }],
    queryFn: () => getAttemptSpendedTime(id),
    select: (res) => res?.data,
  });

  return { data, ...rest };
};

export default useGetSpendedTime;
