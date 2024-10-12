import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MovieSearch from './MovieSearch';
import PopularMovies from './PopularMovies';
import MovieDetails from './MovieDetails';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">MovieApp</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Popular Movies</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/search">Search Movies</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<PopularMovies />} />
          <Route path="/search" element={<MovieSearch />} />
          <Route path="/movie/:movieId" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

