// api/index.js
import wordAPI from './wordAPI';
import safeWordAPI from './safeWordAPI';
import galleryAPI from './galleryAPI';

const API = {
  word: wordAPI,
  safeWord: safeWordAPI,
  gallery: galleryAPI,
};

export default API;

// Named exports for convenience
export const {
  fetchWord: getKidWordEncyclopedia,
} = wordAPI;

export const {
  checkSafeWord: isWordSafe,
} = safeWordAPI;

export const {
  getWords: getGalleryWords,
  getWordsDetailed,
} = galleryAPI;
