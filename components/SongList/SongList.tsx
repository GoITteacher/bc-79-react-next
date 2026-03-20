"use client";

import { useState } from "react";
import css from "./SongList.module.css";
import { useQuery } from "@tanstack/react-query";
import { getSongs } from "@/lib/songService";
import Link from "next/link";

const SongList = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const query = formData.get("query") as string;
    setQuery(query);
  };

  const songsQuery = useQuery({
    queryKey: ["getSongs", query],
    queryFn: () => getSongs(query),
    refetchOnMount: false,
  });

  const songs = songsQuery.data?.items || [];

  return (
    <div className={css["songList"]}>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" placeholder="Query" />
        <button type="submit">Search</button>
      </form>

      <ul>
        {songs.map((el) => {
          return (
            <li>
              <Link href={`/songs/${el._id}`}>{el.title}</Link>{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SongList;
