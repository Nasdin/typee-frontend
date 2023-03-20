import apiClient from './client';

const safeWordAPI = {
  async checkSafeWord(word) {
    try {
      const response = await apiClient.post('/api/v1/word/safe', { word });
      return response;
    } catch (error) {
      console.error('Error checking if word is safe:', error);
      throw error;
    }
  },
};

export default safeWordAPI;