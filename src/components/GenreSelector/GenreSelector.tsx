import { useState, useEffect } from 'react';
import { Genre } from '../../types/genres';
import { fetchGenres } from '../../services/tmdb';
import { useLanguageContext } from '../../settings/settings';
import './index.scss';

const GenreSelector = () => {
  const { language } = useLanguageContext();

  const [genres, setGenres] = useState<Genre[] | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const genresData = await fetchGenres(language);
      if (genresData) {
        setGenres(genresData);
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
    <>
      {genres && genres.length > 0 ? (
        <div className="genre-selector">
          <select className="genre-selector__select" name="genres" id="genre">
            {genres.map((genre) => {
              return (
                <option
                  key={genre.id}
                  className="genre-selector__option"
                  value={genre.id}
                >
                  {genre.name}
                </option>
              );
            })}
          </select>
        </div>
      ) : (
        <div>No genres available</div>
      )}
    </>
  );
};
export default GenreSelector;
