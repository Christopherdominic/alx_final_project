import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} MovieApp. All rights reserved.</p>
  </footer>
);

export default Footer;

