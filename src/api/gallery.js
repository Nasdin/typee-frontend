import apiClient from './client';

const galleryAPI = {
    getWords: (limit = 10, offset = 0) =>
      apiClient.get(`/api/v1/gallery/words?limit=${limit}&offset=${offset}`),
    getWordsDetailed: (limit = 10, offset = 0) =>
      apiClient.get(`/api/v1/gallery/words_detailed?limit=${limit}&offset=${offset}`),
  };

export default galleryAPI;