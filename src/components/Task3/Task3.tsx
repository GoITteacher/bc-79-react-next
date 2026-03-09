import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import css from "./Task3.module.css";
import { Song } from "../../types/songs";
import { getAllSongs } from "../../services/songsService";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import toast from "react-hot-toast";

const Task3 = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSearchSongs = async (title: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await getAllSongs({ title });
      setSongs(response.items);
      toast.success("Ok");
    } catch (err) {
      toast.error(err.message);
    }

    setIsLoading(false);
  };

  return (
    <div className={css["task3"]}>
      <SearchForm callback={onSearchSongs} />
      {!isLoading && !error && (
        <ul>
          {songs.map((item, i) => {
            return (
              <li key={i}>
                {item.title} - {item.artist}
              </li>
            );
          })}
        </ul>
      )}

      {isLoading && (
        <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
      )}

      {error && <p>{error}</p>}
    </div>
  );
};

export default Task3;
