import { Movie } from "../../../../types/movies";
import css from "./MovieItem.module.css";

interface MovieItemProps {
  movie: Movie;
}

const MovieItem = ({ movie }: MovieItemProps) => {
  return (
    <div className={css.movieItem}>
      <div className={css.header}>
        <h3 className={css.title}>{movie.title}</h3>
        <span className={css.rating}>⭐ {movie.rating}</span>
      </div>

      <p className={css.director}>Directed by: {movie.director}</p>

      <div className={css.meta}>
        <span>{movie.genre}</span>
        <span>{movie.releaseYear}</span>
        <span>{movie.durationMinutes} min</span>
        <span>{movie.language}</span>
      </div>

      <p className={css.summary}>{movie.summary}</p>

      <div className={css.footer}>
        <span>Created: {new Date(movie.createdAt).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default MovieItem;
