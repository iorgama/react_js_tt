import React from 'react';
import './Header.css';
import Nav from './Menu/Nav';

const Header = ({ menu }) => {
  return (
    <header>
      <div className="menu-section">
        <p>Logo Company</p>
        <Nav menu={menu} />
      </div>
    </header>
  );
};

export default Header;
