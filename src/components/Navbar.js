import React from 'react';
import logo from '../logo.svg';

import './Navbar.scss';

export default function Navbar() {
  return (
    <nav className="nav">
      <img src={logo} alt="logo" className="nav__logo" />
      <ul className="nav__links">
        <li>
          <a href="/" className="nav__link">
            home
          </a>
        </li>
        <li>
          <a href="/" className="nav__link">
            about
          </a>
        </li>
        <li>
          <a href="/" className="nav__link active">
            tours
          </a>
        </li>
      </ul>
    </nav>
  );
}
