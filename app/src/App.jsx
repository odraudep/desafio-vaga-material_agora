import React from 'react';
import Navbar from '@layout/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '@layout/Footer';

function App() {
  return (
    <div className="bg-body text-white">
      <Navbar />

      <main className="container min-h-screen my-4 py-4 rounded shadow bg-body">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
