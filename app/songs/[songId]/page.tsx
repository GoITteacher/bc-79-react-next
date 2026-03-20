import { getSongById } from "@/lib/songService";
import css from "./Page.module.css";
import Link from "next/link";

interface PageProps {
  params: Promise<{ songId: string }>;
}
const Page = async ({ params }: PageProps) => {
  const { songId } = await params;
  const songInfo = await getSongById(songId);

  return (
    <main className={css["page"]}>
      <h1>
        {songInfo.title} - {songInfo.artist}
      </h1>
      <p>{songInfo.album}</p>
      <p>{songInfo.genre}</p>
      <p>{songInfo.durationSeconds}</p>

      <div>
        <Link href={`/songs/${songId}/edit`}>Edit</Link>
        <Link href={`/songs/${songId}/delete`}>Delete</Link>
      </div>
    </main>
  );
};

export default Page;
