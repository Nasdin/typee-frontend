import client from './client';

const safeWordAPI = {
  checkSafeWord: (word) => client.post('/is-word-safe', { word }),
};

export default safeWordAPI;
