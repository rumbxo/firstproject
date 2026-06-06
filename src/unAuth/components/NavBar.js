import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__brand">RUMBXO</div>
      <div className="navbar__links">
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default NavBar;
