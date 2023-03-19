import client from 'api/client';
import { checkAuthentication, getIdToken } from 'helpers/firebaseHelper';

const apiClient = {
  async post(path, data) {
    const token = await getIdToken();
    const headers = {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    };
    const response = await client.post(path, data, { headers });
    return response.data;
  },
  async get(path) {
    const token = await getIdToken();
    const headers = {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    };
    const response = await client.get(path, { headers });
    return response.data;
  },
};

export const isWordSafe = async (word) => {
  try {
    const response = await apiClient.post('/is-word-safe', { word });
    return response;
  } catch (error) {
    console.error('Error checking if word is safe:', error);
    throw error;
  }
};

export const getKidWordEncyclopedia = async (word) => {
  try {
    const response = await apiClient.post('/kid-word-encyclopedia', { word });
    return response;
  } catch (error) {
    console.error('Error fetching word information:', error);
    throw error;
  }
};

export const authenticateUser = async () => {
  try {
    const { isAuthenticated, idToken } = await checkAuthentication();
    if (isAuthenticated) {
      localStorage.setItem('token', idToken);
    } else {
      localStorage.removeItem('token');
    }
    return isAuthenticated;
  } catch (error) {
    console.error('Error authenticating user:', error);
    throw error;
  }
};
