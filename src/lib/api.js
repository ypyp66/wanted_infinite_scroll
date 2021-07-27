import { request } from '../utils/axios';

export const fetchComments = async page => {
  return await request('get', `${API_URL}_page=${page}&_limit=10`);
};

const API_URL = 'https://jsonplaceholder.typicode.com/comments?';
