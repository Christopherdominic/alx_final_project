import React, { useState, useEffect } from 'react';

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const storedWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    setWatchlist(storedWatchlist);
  }, []);

  const removeFromWatchlist = (movieId) => {
    const updatedList = watchlist.filter(movie => movie.id !== movieId);
    setWatchlist(updatedList);
    localStorage.setItem('watchlist', JSON.stringify(updatedList));
  };

  const markAsWatched = (movieId) => {
    const updatedList = watchlist.map(movie =>
      movie.id === movieId ? { ...movie, watched: true } : movie
    );
    setWatchlist(updatedList);
    localStorage.setItem('watchlist', JSON.stringify(updatedList));
  };

  return (
    <div>
      <h2>Your Watchlist</h2>
      {watchlist.length ? (
        <ul>
          {watchlist.map(movie => (
            <li key={movie.id}>
              {movie.title} {movie.watched && '(Watched)'}
              <button onClick={() => markAsWatched(movie.id)}>Mark as Watched</button>
              <button onClick={() => removeFromWatchlist(movie.id)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No movies in your watchlist.</p>
      )}
    </div>
  );
};

export default Watchlist;

