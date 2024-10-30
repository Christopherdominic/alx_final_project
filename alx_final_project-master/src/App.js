import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import LandingPage from './LandingPage';
import Watchlist from './Watchlist';
import PopularMovies from './PopularMovies';
import MovieDetails from './MovieDetails';
import MovieSearch from './MovieSearch';
import Profile from './Profile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <Router>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/popular" element={<PopularMovies />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/search" element={<MovieSearch />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/profile" element={<Profile isLoggedIn={isLoggedIn} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

