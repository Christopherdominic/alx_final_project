import React, { useState } from 'react';
import axios from 'axios';

function MovieSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=504a45076accb0f6d28e87336662450d&query=${searchTerm}`
    );
    setMovies(response.data.results);
  };

  return (
    <div className="container">
      <h2>Search for Movies</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter movie title"
          className="form-control mb-3"
        />
        <button type="submit" className="btn btn-primary">Search</button>
      </form>
      <div className="row mt-4">
        {movies.map((movie) => (
          <div className="col-md-3" key={movie.id}>
            <div className="card">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieSearch;

