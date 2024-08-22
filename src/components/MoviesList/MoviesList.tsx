import { useState, useEffect } from 'react';
import { fetchMovies } from '../../services/tmdb';
import { Movie } from '../../types/movie';
import MoviePreview from '../MoviePreview/MoviePreview';
import './style.css';

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

  console.log(movies);
  return (
    <div className="movies-list">
      {movies && movies.length > 0 ? (
        movies.map((movie) => (
          <MoviePreview
            key={movie.id}
            title={movie.title}
            src={movie.poster_path}
          />
        ))
      ) : (
        <div>No movies available</div>
      )}
    </div>
  );
};

export default MoviesList;
