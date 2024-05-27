"use client";
import React from "react";
import { Button, Spinner } from "flowbite-react";
import { useMutation } from "@tanstack/react-query";
import { startTest } from "@/data/attempt";
import { useParams, useRouter } from "next/navigation";

const StartButton = () => {
  const { id } = useParams();
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
      onClick={() => mutate(id)}
      size="lg"
      color="gray"
      className="w-60 [&>span]:text-3xl text-center mt-12 rounded-none"
    >
      {isPending && <Spinner aria-label="Spinner button example" size="sm" />}
      Start
    </Button>
  );
};

export default StartButton;
