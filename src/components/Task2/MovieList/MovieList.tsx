import { Movie } from "../../../types/movies";
import MovieItem from "./MovieItem/MovieItem";
import css from "./MovieList.module.css";

interface MovieListProps {
  items: Movie[];
}

const MovieList = ({ items }: MovieListProps) => {
  return (
    <div className={css["movieList"]}>
      <ul>
        {items.map((item, i) => {
          return (
            <li key={i}>
              <MovieItem movie={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
