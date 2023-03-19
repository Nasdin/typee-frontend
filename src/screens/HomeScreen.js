import React, { useState, useEffect } from "react";
import TypeeRobot from "../components/TypeeRobot";
import OnScreenKeyboard from "../components/OnScreenKeyboard";
import { isWordSafe } from "../api";

function HomeScreen() {
  const [input, setInput] = useState("");
  const [wordIsSafe, setWordIsSafe] = useState(true);

  useEffect(() => {
    const checkWordSafety = async () => {
      if (input.length > 0) {
        const safe = await isWordSafe(input);
        setWordIsSafe(safe);
      }
    };
    checkWordSafety();
  }, [input]);

  return (
    <div className="home-screen">
      <TypeeRobot wordIsSafe={wordIsSafe} />
      <OnScreenKeyboard input={input} setInput={set
