import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '@views/Home';
import Hero from '@views/Hero';
import SearchHeroes from '@views/SearchHeroes';
import Error from '@views/Error';
import App from '../App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/hero/:id',
        element: <Hero />,
      },
      {
        path: '/search-heroes/:searchName',
        element: <SearchHeroes />,
      },
    ],
  },
]);

export default router;
