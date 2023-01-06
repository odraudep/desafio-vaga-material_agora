import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NavbarMenuItem({ menuItem }) {
  const { pathname } = useLocation();
  const isCurrentPage = pathname === menuItem.path;

  return (
    <li>
      <Link
        to={menuItem.path}
        aria-current={isCurrentPage ? 'page' : null}
        className={`transition-colors ${
          isCurrentPage
            ? 'text-white'
            : 'text-gray-400 hover:text-gray-300 focus:text-gray-300'
        }`}
      >
        {menuItem.label}
      </Link>
    </li>
  );
}

export default NavbarMenuItem;
