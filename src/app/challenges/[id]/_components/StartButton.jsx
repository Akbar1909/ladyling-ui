"use client";
import React from "react";
import { Button, Spinner } from "flowbite-react";
import { useMutation } from "@tanstack/react-query";
import { startTest } from "@/data/attempt";
import { useParams, useRouter } from "next/navigation";
import useEnterModal from "@/providers/zustand/ui";
import useAuthStore from "@/providers/zustand/auth";
import cookie from "@/utils/cookie";

const StartButton = () => {
  const { id } = useParams();
  const toggle = useEnterModal((state) => state.toggle);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: startTest,
    onSuccess: (res) => {
      router.replace(`/board/${res.data.testId}/${res.data.id}`);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return (
    <Button
      onClick={() => {
        if (!isAuthenticated) {
          toggle();
          return;
        }

        cookie.remove("seconds", { path: "/" });

        mutate(id);
      }}
      size="lg"
      disabled={isPending}
      color="primary"
      className="w-60 [&>span]:text-3xl text-center mt-12 rounded-none"
    >
      {isPending && <Spinner aria-label="Spinner button example" size="sm" />}
      Start
    </Button>
  );
};

export default StartButton;
