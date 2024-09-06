import { useState, useEffect } from 'react';
import { useLanguageContext } from '../../settings/settings';
import { useNavigate, useLocation } from 'react-router-dom';
import { fetchMovies } from '../../services/tmdb';
import { Movie } from '../../types/movies';
import MoviesList from '../../components/MoviesList/MoviesList';
import GenreSelector from '../../components/GenreSelector/GenreSelector';

const HomePage = () => {
  const { language } = useLanguageContext();
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const initialGenre = queryParams.get('genre') || '28';

  const [selectedGenre, setSelectedGenre] = useState<string>(initialGenre);
  const [movies, setMovies] = useState<Movie[] | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const moviesData = await fetchMovies(language, selectedGenre);
      if (moviesData) {
        setMovies(moviesData);
        setLoading(false);
      } else {
        setError('Failed to fetch movies');
        setLoading(false);
      }
    };
    fetchData();
  }, [language, selectedGenre]);

  useEffect(() => {
    navigate(`/movies?genre=${selectedGenre}`);
  }, [selectedGenre, navigate]);

  const handleGenreChange = (newGenre: string) => setSelectedGenre(newGenre);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <main>
      <GenreSelector genre={selectedGenre} onSelectGenre={handleGenreChange} />
      {movies?.length ? (
        <MoviesList data={movies} />
      ) : (
        <div>No movies available</div>
      )}
    </main>
  );
};

export default HomePage;
