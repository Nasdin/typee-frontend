import React, { useState, useEffect } from "react";
import TypeeRobot from "../components/TypeeRobot";
import OnScreenKeyboard from "../components/OnScreenKeyboard";
import { isWordSafe } from "../api";
import isEnglishWord from "../helpers/isEnglishWord";

function HomeScreen() {
  const [input, setInput] = useState("");
  const [wordIsSafe, setWordIsSafe] = useState(false);
  const [wordData, setWordData] = useState({});

  useEffect(() => {
    const checkWordSafety = async () => {
      if (input.length > 0) {
        const isEnglish = isEnglishWord(input);
        if (isEnglish) {
          const safe = await isWordSafe(input);
          setWordIsSafe(safe);
          if (safe) {
            // Only fetch word data if the word is safe
            try {
              const data = await getKidWordEncyclopedia(input);
              setWordData(data);
            } catch (error) {
              console.error('Error fetching word data:', error);
            }
          }
        } else {
          setWordIsSafe(false);
          setWordData({});
        }
      } else {
        setWordIsSafe(false);
        setWordData({});
      }
    };
    checkWordSafety();
  }, [input]);

  return (
    <div className="home-screen">
      <TypeeRobot wordIsSafe={wordIsSafe} />
      <OnScreenKeyboard input={input} setInput={setInput} />
      <WordDisplay
        imageUrl={wordData.imageUrl}
        explanation={wordData.explanation}
        story={wordData.story}
        fact={wordData.fact}
      />
    </div>
  );
}

export default HomeScreen;
