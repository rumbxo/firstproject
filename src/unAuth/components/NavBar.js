import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink className="navbar__brand" to="/">RUMBXO</NavLink>
      <div className="navbar__links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/videos">Videos</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
