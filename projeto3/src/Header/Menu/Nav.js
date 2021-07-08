import React from 'react';
import './Nav.css';

const Nav = ({ menu }) => {
  return (
    <nav className="nav-section">
      <ul>
        {menu.map((item) => (
          <li key={item}>
            <a href="/">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
