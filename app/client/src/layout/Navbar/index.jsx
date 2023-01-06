import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiFulguroPunch } from 'react-icons/gi';
import { BiSearch } from 'react-icons/bi';
import NavbarMenuItem from '../NavbarMenuItem';
import SearchModal from './SearchModal';

const menuItems = [
  {
    path: '/',
    label: 'Home',
  },
];

function Navbar() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <header className="sticky top-0 shadow z-20 bg-bodySecondary/95">
        <nav className="container py-2 flex items-center">
          <Link to="/">
            <GiFulguroPunch size="3.5rem" className="fill-primary" />
          </Link>

          <ul className="flex items-center gap-4 ml-auto">
            {menuItems.map((menuItem) => (
              <NavbarMenuItem key={menuItem.path} menuItem={menuItem} />
            ))}

            <li className="grid place-items-center">
              <button type="button" onClick={openModal}>
                <BiSearch size="1.5rem" />
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {isOpenModal ? (
        <SearchModal closeEvent={closeModal} />
      ) : null}
    </>
  );
}

export default Navbar;
