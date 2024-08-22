import { Movie } from '../../types/movieDetail';

interface MovieDetailProps {
  data: Movie;
}

const MovieDetail = ({ data }: MovieDetailProps) => {
  return (
    <main>
      <h1>{data.title}</h1>
    </main>
  );
};

export default MovieDetail;
