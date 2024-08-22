import MoviePreview from '../MoviePreview/MoviePreview';
import { Movie } from '../../types/movies';
import './style.scss';

interface MovieListProps {
  data: Movie[];
}

const MoviesList = ({ data }: MovieListProps) => {
  return (
    <div className="movies-list">
      {data.map((movie) => (
        <MoviePreview
          key={movie.id}
          id={movie.id}
          title={movie.title}
          src={movie.poster_path}
        />
      ))}
    </div>
  );
};

export default MoviesList;
