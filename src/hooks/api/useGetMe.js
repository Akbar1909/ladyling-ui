import { getMe } from "@/data/user";
import cookie from "@/utils/cookie";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import useAuthStore from "@/providers/zustand/auth";

const useGetMe = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const state = useQuery({
    queryKey: ["me"],
    queryFn: getMe,
    select: (res) => res.data,
    enabled: isAuthenticated,
  });

  useEffect(() => {
    if (!state.isSuccess) {
      return;
    }

    cookie.set("temp", state.data?.id);
  }, [state.isSuccess, state.data]);

  return { ...state };
};

export default useGetMe;
