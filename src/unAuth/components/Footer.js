import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Built by Rumbxo • © {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
