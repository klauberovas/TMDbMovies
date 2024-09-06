import { useNavigate } from 'react-router-dom';
import { Movie } from '../../types/movieDetail';
import './index.scss';

interface MovieDetailProps {
  data: Movie;
}

const MovieDetail = ({ data }: MovieDetailProps) => {
  const navigate = useNavigate();

  return (
    <>
      <button
        className="button__back"
        onClick={() => navigate(-1)}
        aria-label="Zpět na předchozí stránku"
      >
        Zpět
      </button>
      <article className="film">
        <figure className="film__poster">
          <img
            className="film__img"
            src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`}
            alt={`poster ${data.title}`}
          />
          <figcaption className="film__description">
            <h1 className="film__title">{data.title}</h1>
            <p>{data.overview}</p>
          </figcaption>
        </figure>
      </article>
    </>
  );
};

export default MovieDetail;
