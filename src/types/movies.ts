export interface Movie {
  _id: string;
  title: string;
  director: string;
  genre: string;
  releaseYear: number;
  rating: number;
  durationMinutes: number;
  language: string;
  summary: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetAllMoviesParams {
  page?: number;
  perPage?: number;
  title?: string;
}

export interface GetAllMoviesResponse {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  items: Movie[];
}

export interface CreateMovieBody {
  title: string;
  director: string;
  genre: string;
  releaseYear: number;
  rating: number;
  durationMinutes: number;
  language: string;
  summary: string;
}
