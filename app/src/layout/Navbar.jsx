import React from 'react';
import { Link } from 'react-router-dom';
import { GiFulguroPunch } from 'react-icons/gi';
import NavbarMenuItem from './NavbarMenuItem';

const menuItems = [
  {
    path: '/',
    label: 'Home',
  },
];

function Navbar() {
  return (
    <header className="sticky top-0 shadow z-20 bg-bodySecondary/95">
      <nav className="container py-2 flex items-center">
        <Link to="/">
          <GiFulguroPunch size="3.5rem" className="fill-primary" />
        </Link>

        <ul className="flex gap-2 ml-auto">
          {menuItems.map((menuItem) => (
            <NavbarMenuItem key={menuItem.path} menuItem={menuItem} />
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
