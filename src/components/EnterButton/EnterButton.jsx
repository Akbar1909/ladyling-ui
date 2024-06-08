"use client";
import useAuthStore from "@/providers/zustand/auth";
import useEnterModal from "@/providers/zustand/ui";
import { Button } from "flowbite-react";
import React from "react";

const EnterButton = () => {
  const toggle = useEnterModal((state) => state.toggle);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (isAuthenticated) {
    return null;
  }

  return (
    <Button color="primary" className="rounded-none w-32" onClick={toggle}>
      Enter
    </Button>
  );
};

export default EnterButton;
