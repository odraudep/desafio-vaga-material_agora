import React from 'react';

function Footer() {
  const actualYear = new Date().getFullYear();

  return (
    <footer className="shadow bg-bodySecondary">
      <div className="container py-2">
        <p className="text-center">
          SuperHero ReactJS App &copy;
          {' '}
          {actualYear}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
