import apiClient from './client';

const wordAPI = {
  async fetchWord(word) {
    try {
      const response = await apiClient.post('/api/v1/word/encyclopedia', { word });
      return response;
    } catch (error) {
      console.error('Error fetching word information:', error);
      throw error;
    }
  },
};

export default wordAPI;