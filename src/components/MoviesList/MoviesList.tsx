import { useState, useEffect } from 'react';
import { fetchMovies } from '../../services/tmdb';
import { Movie } from '../../types/movie';

const MoviesList = () => {
  const [movies, setMovies] = useState<Movie[] | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const moviesData = await fetchMovies();
      if (moviesData) {
        setMovies(moviesData);
        setLoading(false);
      } else {
        setError('Failed to fetch movies');
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {movies && movies.length > 0 ? (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      ) : (
        <div>No movies available</div>
      )}
    </div>
  );
};

export default MoviesList;
