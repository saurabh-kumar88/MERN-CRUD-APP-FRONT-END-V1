import { fetchWithDelay } from './fetch';
const url = 'https://mern-crud-app-back-end-v1.herokuapp.com/api/todo/';

const fetchAll = () => fetchWithDelay(url);
const fetchLatest = () => fetchWithDelay('https://mern-crud-app-back-end-v1.herokuapp.com/api/todo/latest');

export  const getAPI = {
  fetchAll,
  fetchLatest,
};