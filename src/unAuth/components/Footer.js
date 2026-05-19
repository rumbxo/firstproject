import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Built with React • © {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
