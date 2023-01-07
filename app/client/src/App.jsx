import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from '@layout/Navbar';
import Footer from '@layout/Footer';

function App() {
  return (
    <div className="bg-body text-white">
      <Navbar />

      <main className="container min-h-screen my-4 py-4 rounded shadow bg-body">
        <Outlet />
      </main>

      <ToastContainer
        autoClose={4000}
        draggable={false}
        theme="dark"
      />
      <Footer />
    </div>
  );
}

export default App;
