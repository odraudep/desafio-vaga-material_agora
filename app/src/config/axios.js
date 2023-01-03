import axios from 'axios';

const { VITE_ACCESS_TOKEN } = import.meta.env;

export const heroFetch = axios.create({
  baseURL: `https://superheroapi.com/api/${VITE_ACCESS_TOKEN}/`,
  headers: {
    'Content-Type': 'application/json',
  },
});
