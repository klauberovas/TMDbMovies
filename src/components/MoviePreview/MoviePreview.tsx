import './style.css';

interface MoviePreviewProps {
  title: string;
  src: string;
}

const MoviePreview = ({ title, src }: MoviePreviewProps) => {
  return (
    <div className="movie-item">
      <img
        className="movie-item__img"
        src={`https://image.tmdb.org/t/p/w300/${src}`}
        alt={`${title} poster`}
      />
    </div>
  );
};
export default MoviePreview;
