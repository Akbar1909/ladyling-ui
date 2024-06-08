"use client";
import useGetMe from "@/hooks/api/useGetMe";
import React from "react";

const Content = ({ children }) => {
  useGetMe();
  return <div className="">{children}</div>;
};

export default Content;
