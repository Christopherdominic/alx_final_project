import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ isLoggedIn, toggleLogin }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <header className="header">
      <h1>MovieApp</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/popular">Popular</Link>
        <Link to="/watchlist">Watchlist</Link>
        {isLoggedIn && <Link to="/profile">Profile</Link>}
        <button onClick={toggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <button onClick={toggleLogin}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </nav>
    </header>
  );
};

export default Header;

