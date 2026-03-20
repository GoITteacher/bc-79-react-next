import { serverApi } from "./apiConfig";
interface Song {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
  releaseYear: number;
  durationSeconds: number;
  label: string;
  language: string;
}

interface GetSongsResponse {
  page: number;
  perPage: number;
  items: Song[];
}

export const getSongs = async (title: string) => {
  const params = { title };
  const res = await serverApi.get<GetSongsResponse>("/public/songs", {
    params,
  });
  return res.data;
};

export const getSongById = async (id: string) => {
  const res = await serverApi.get<{ item: Song }>(`/public/songs/${id}`);
  return res.data.item;
};

export const deleteSongById = async (id: string) => {
  const res = await serverApi.delete(`/public/songs/${id}`);
  return res.data;
};
