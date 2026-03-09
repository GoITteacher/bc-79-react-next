import {
  CreateMovieBody,
  GetAllMoviesParams,
  GetAllMoviesResponse,
  Movie,
} from "../types/movies";
import { serverApi } from "./serverConfig";

export const getAllMovies = async (params: GetAllMoviesParams) => {
  const res = await serverApi.get<GetAllMoviesResponse>("/public/movies", {
    params,
  });
  return res.data;
};

export const createMovie = async (body: CreateMovieBody) => {
  const res = await serverApi.post<{ item: Movie }>("/public/movies", body);
  return res.data.item;
};

export const getMovieById = async () => {};
export const updateMovie = async () => {};
export const deleteMovie = async () => {};
