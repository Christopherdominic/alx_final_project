import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="container text-center">
        <h1>Welcome to MovieApp</h1>
        <p className="lead">
          Discover popular movies, manage your watchlist, and explore movie details with trailers!
        </p>
        <div className="app-features">
          <div className="feature-item">
            <h3>Popular Movies</h3>
            <p>Explore the latest popular movies with detailed information and trailers.</p>
          </div>
          <div className="feature-item">
            <h3>Personal Watchlist</h3>
            <p>Add your favorite movies to your watchlist and manage what to watch next.</p>
          </div>
          <div className="feature-item">
            <h3>Search Movies</h3>
            <p>Find any movie quickly with our search functionality and get instant details.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

