import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";

import { CreateMovieBody, Movie } from "../../types/movies";
import { createMovie, getAllMovies } from "../../services/movieService";
import MovieList from "./MovieList/MovieList";
import CreateMovieForm from "./CreateMovieForm/CreateMovieForm";

const Task2 = () => {
  const [items, setItems] = useState<Movie[]>([]);

  const onSearch = async (userTitle: string) => {
    const res = await getAllMovies({ title: userTitle });
    setItems(res.items);
  };

  const onCreateMovie = async (movieInfo: CreateMovieBody) => {
    const newMovie = await createMovie(movieInfo);
    setItems([newMovie, ...items]);
  };

  return (
    <>
      <CreateMovieForm callback={onCreateMovie} />
      <SearchForm callback={onSearch} />
      <MovieList items={items} />
    </>
  );
};

export default Task2;
