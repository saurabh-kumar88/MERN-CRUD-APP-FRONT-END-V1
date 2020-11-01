import { fetchWithDelay } from './fetch';
const url = 'https://mern-todo-app-v1.herokuapp.com/api/todo/';

const fetchAll = () => fetchWithDelay(url);
const fetchLatest = () => fetchWithDelay('https://mern-todo-app-v1.herokuapp.com/api/todo/latest');

export  const getAPI = {
  fetchAll,
  fetchLatest,
};