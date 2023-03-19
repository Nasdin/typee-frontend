import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const isWordSafe = async (word) => {
  try {
    const response = await apiClient.post('/is-word-safe', { word });
    return response.data;
  } catch (error) {
    console.error('Error checking if word is safe:', error);
    throw error;
  }
};

export const getKidWordEncyclopedia = async (word) => {
  try {
    const response = await apiClient.post('/kid-word-encyclopedia', { word });
    return response.data;
  } catch (error) {
    console.error('Error fetching word information:', error);
    throw error;
  }
};
