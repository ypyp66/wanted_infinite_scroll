import axios from 'axios';

export const getComments = async pageNumber => {
  const result = await axios.get(
    `https://jsonplaceholder.typicode.com/comments?_page=${pageNumber}&_limit=10`,
  );

  if (result) {
    return result.data;
  }
};
