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
    <header>
      <nav className="container py-2 flex items-center shadow">
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
