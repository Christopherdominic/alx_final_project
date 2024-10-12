import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PopularMovies() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=504a45076accb0f6d28e87336662450d`
      );
      setPopularMovies(response.data.results);
    };
    fetchPopularMovies();
  }, []);

  return (
    <div className="container">
      <h2>Popular Movies</h2>
      <div className="row">
        {popularMovies.map((movie) => (
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

export default PopularMovies;

