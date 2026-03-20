"use client";
import { deleteSongById } from "@/lib/songService";
import css from "./DeleteSongBtn.module.css";
import { useParams } from "next/navigation";

const DeleteSongBtn = () => {
  const params = useParams();
  const songId = params.songId as string;

  const handleClick = async () => {
    await deleteSongById(songId);
  };

  return (
    <button onClick={handleClick} className={css["deleteSongBtn"]}>
      Так, видалити пісню!
    </button>
  );
};

export default DeleteSongBtn;
