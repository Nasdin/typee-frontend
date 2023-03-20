import React from 'react';

const WordList = ({ words }) => (
  <ul>
    {words.map((wordData) => (
      <li key={wordData.word}>{wordData.word}</li>
    ))}
  </ul>
);

export default WordList;