"use client";
import React, { useState } from "react";
import DiffHighlighter from "@/components/DiffHighlighter";

const Home = () => {
  const [string1, setString1] = useState("Let me see");
  const [string2, setString2] = useState("Le you see");

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">String Diff Highlighter</h1>
      <DiffHighlighter string1={string2} string2={string1} />
    </div>
  );
};

export default Home;
