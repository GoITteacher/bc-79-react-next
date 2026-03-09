import { GetAllSongsParams, GetAllSongsResponse } from "../types/songs";
import { serverApi } from "./serverConfig";

export const getAllSongs = async (params: GetAllSongsParams) => {
  const res = await serverApi.get<GetAllSongsResponse>("/public/songs", {
    params,
  });
  return res.data;
};

export const createSong = () => {};
export const getSongById = () => {};
export const updateSong = () => {};
export const deleteSong = () => {};
