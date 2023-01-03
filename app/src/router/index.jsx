import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '@views/Home';
import App from '../App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>404</h1>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

export default router;
