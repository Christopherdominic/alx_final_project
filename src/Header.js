import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="bg-dark text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">
          {/* Placeholder for the logo */}
          <h1 className="text-white">MovieApp</h1>
        </div>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/popular" className="nav-link text-white">Popular Movies</Link>
            </li>
            <li className="nav-item">
              <Link to="/watchlist" className="nav-link text-white">Watchlist</Link>
            </li>
            <li className="nav-item">
              <Link to="/search" className="nav-link text-white">Search</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

