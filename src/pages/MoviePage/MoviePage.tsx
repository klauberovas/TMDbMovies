import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MovieDetail from '../../components/MovieDetail/MovieDetail';
import { fetchMovieDetail } from '../../services/tmdb';
import { Movie } from '../../types/movieDetail';

const MoviePage = () => {
  const { id } = useParams<string>();

  const [movie, setMovie] = useState<Movie | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError('No movie ID provided');
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      const movieData = await fetchMovieDetail(id);
      if (movieData) {
        setMovie(movieData);
        setLoading(false);
      } else {
        setError('Failed to fetch movies');
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return <main>{movie && <MovieDetail data={movie} />}</main>;
};

export default MoviePage;
