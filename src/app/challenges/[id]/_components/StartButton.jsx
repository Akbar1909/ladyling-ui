"use client";
import React from "react";
import { Button, Spinner } from "flowbite-react";
import { useMutation } from "@tanstack/react-query";
import { startTest } from "@/data/attempt";
import { useParams, useRouter } from "next/navigation";
import useEnterModal from "@/providers/zustand/ui";
import useAuthStore from "@/providers/zustand/auth";

const StartButton = () => {
  const { id } = useParams();
  const toggle = useEnterModal((state) => state.toggle);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: startTest,
    onSuccess: ({ data }) => {
      if (data.status === 403) {
        alert("You have already tried");
        return;
      }
      router.replace(`/board/${data.testId}/${data.id}`);
    },
    onError: () => {
      alert("Something went wrong");
    },
  });

  return (
    <Button
      onClick={() => {
        if (!isAuthenticated) {
          toggle();
          return;
        }

        mutate(id);
      }}
      size="lg"
      disabled={isPending}
      color="primary"
      className="w-60 [&>span]:text-3xl text-center mt-12 rounded-none"
    >
      {isPending ? (
        <Spinner aria-label="Spinner button example" size="sm" />
      ) : (
        "Start"
      )}
    </Button>
  );
};

export default StartButton;
