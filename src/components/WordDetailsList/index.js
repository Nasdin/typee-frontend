// components/WordDetailsList/index.js
import React from 'react';

const WordDetailsList = ({ words }) => (
  <ul>
    {words.map((wordInfo) => (
      <li key={wordInfo.word}>
        <h3>{wordInfo.word}</h3>
        <p>Explanation: {wordInfo.explanation}</p>
        <p>Story: {wordInfo.story}</p>
        <p>Fact: {wordInfo.fact}</p>
        <img src={wordInfo.imageUrl} alt={wordInfo.word} />
      </li>
    ))}
  </ul>
);

export default WordDetailsList;
