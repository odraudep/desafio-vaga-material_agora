import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '@views/Home';
import Hero from '@views/Hero';
import App from '../App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: (
      <h1>
        Sorry, There was an error in this application. We're gonna redirect you
        to the home.
      </h1>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/hero/:id',
        element: <Hero />,
      },
    ],
  },
]);

export default router;
