import { Link } from 'react-router-dom';
import './style.scss';

interface MoviePreviewProps {
  id: number;
  title: string;
  src: string;
}

const MoviePreview = ({ id, title, src }: MoviePreviewProps) => {
  return (
    <Link to={`/detail/${id}`} className="movie-item">
      <img
        className="movie-item__img"
        src={`https://image.tmdb.org/t/p/w300/${src}`}
        alt={`${title} poster`}
      />
    </Link>
  );
};
export default MoviePreview;
