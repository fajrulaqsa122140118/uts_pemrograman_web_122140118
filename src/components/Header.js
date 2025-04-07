import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="simple-header">
      <nav className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/promo">Promo</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </header>
  );
};

export default Header;
