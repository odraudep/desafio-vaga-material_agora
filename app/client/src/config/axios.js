import axios from 'axios';

// const { VITE_ACCESS_TOKEN } = import.meta.env;

export const heroFetch = axios.create({
  // baseURL: `https://superheroapi.com/api/${VITE_ACCESS_TOKEN}/`,
  baseURL: 'http://localhost:8888/superheroes',
  headers: {
    'Content-Type': 'application/json',
  },
});
