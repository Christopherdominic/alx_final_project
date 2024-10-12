import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=504a45076accb0f6d28e87336662450d`
      );
      setMovie(response.data);

      const recResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=504a45076accb0f6d28e87336662450d`
      );
      setRecommendations(recResponse.data.results);
    };
    fetchMovieDetails();
  }, [movieId]);

  return (
    <div className="container">
      {movie && (
        <>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
          <h3>Recommended Movies</h3>
          <div className="row">
            {recommendations.map((recMovie) => (
              <div className="col-md-3" key={recMovie.id}>
                <div className="card">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${recMovie.poster_path}`}
                    alt={recMovie.title}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{recMovie.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default MovieDetails;

