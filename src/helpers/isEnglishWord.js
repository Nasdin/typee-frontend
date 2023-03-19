const englishWords = require('popular-english-words');

function isEnglishWord(word) {
  return englishWords.includes(word.toLowerCase());
}

export default isEnglishWord;
