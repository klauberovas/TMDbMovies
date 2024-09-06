import { useNavigate } from 'react-router-dom';
import { Movie } from '../../types/movieDetail';

interface MovieDetailProps {
  data: Movie;
}

const MovieDetail = ({ data }: MovieDetailProps) => {
  const navigate = useNavigate();

  return (
    <div>
      <button className="button__back" onClick={() => navigate(-1)}>
        Zpět
      </button>
      <h1>{data.title}</h1>
    </div>
  );
};

export default MovieDetail;
