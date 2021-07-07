import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="menu-section">
        <p>Logo Company</p>
        <nav className="nav-section">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/showcase">Showcase</a>
            </li>
            <li>
              <a href="/packages">Packages</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
