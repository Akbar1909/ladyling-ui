"use client";
import useGetMe from "@/hooks/api/useGetMe";
import useAuthStore from "@/providers/zustand/auth";
import useEnterModal from "@/providers/zustand/ui";
import { Button } from "flowbite-react";
import React from "react";

const EnterButton = () => {
  const toggle = useEnterModal((state) => state.toggle);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const { data } = useGetMe();

  if (isAuthenticated) {
    return <span className="text-xl">{data?.username || ""}</span>;
  }

  return (
    <Button color="primary" className="rounded-none w-32" onClick={toggle}>
      Enter
    </Button>
  );
};

export default EnterButton;
