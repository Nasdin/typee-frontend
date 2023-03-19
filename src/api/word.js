import client from './client';

const wordAPI = {
  fetchWord: (word) => client.post('/kid-word-encyclopedia', { word }),
};

export default wordAPI;
