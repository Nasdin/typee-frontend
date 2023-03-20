import axios from 'axios';
import { getIdToken } from '../helpers/firebaseHelper';

const client = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

client.interceptors.request.use(async (config) => {
  const token = await getIdToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const apiClient = {
  async post(path, data) {
    const response = await client.post(path, data);
    return response.data;
  },
  async get(path) {
    const response = await client.get(path);
    return response.data;
  },
};

export default apiClient;