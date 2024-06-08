"use client";
import { enter } from "@/data/auth/auth.request";
import useEnterModal from "@/providers/zustand/ui";
import { useMutation } from "@tanstack/react-query";
import { Button, Label, Modal, Spinner, TextInput } from "flowbite-react";
import { useState } from "react";
import useAuthStore from "@/providers/zustand/auth";
import cookie from "@/utils/cookie";

const LoginModal = () => {
  const { open, toggle } = useEnterModal((state) => ({ ...state }));
  const setToken = useAuthStore((state) => state.setToken);

  const [values, setValues] = useState({ username: "", phoneNumber: "" });

  const enterMutation = useMutation({
    mutationKey: ["enter-mutation"],
    mutationFn: enter,
    onSuccess: ({ data }) => {
      cookie.set("token", data?.access_token, { path: "/" });
      toggle();
      setToken();
    },
  });

  return (
    <Modal show={open} size="md" onClose={toggle} popup>
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Enter our platform
          </h3>
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              enterMutation.mutate(values);
            }}
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="username" value="Your username" />
              </div>
              <TextInput
                id="username"
                placeholder="alisher"
                name="username"
                value={values.username}
                onChange={(e) =>
                  setValues((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                required
              />
            </div>
            <div>
              <div className="block">
                <Label htmlFor="phoneNumber" value="Your phone" />
              </div>
              <TextInput
                id="phoneNumber"
                name="phoneNumber"
                placeholder="+998998034545"
                required
                onChange={(e) =>
                  setValues((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
              />
            </div>
            <div className="w-full">
              <Button
                color="primary"
                type="submit"
                className="rounded-none w-full text-3xl"
              >
                {enterMutation.isPending ? (
                  <Spinner className="mr-2" />
                ) : (
                  "Enter"
                )}
              </Button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
