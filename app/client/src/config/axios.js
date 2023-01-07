import axios from 'axios';

export const heroFetch = axios.create({
  baseURL: 'http://localhost:8888/superheroes',
  headers: {
    'Content-Type': 'application/json',
  },
});
