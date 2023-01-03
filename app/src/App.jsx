import React from 'react';
import Navbar from '@layout/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      <main className="container">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
