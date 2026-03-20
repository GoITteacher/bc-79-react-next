import SongList from "@/components/SongList/SongList";
import { getSongs } from "@/lib/songService";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const Page = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["getSongs", ""],
    queryFn: () => getSongs(""),
  });

  return (
    <main>
      <h1>Song List</h1>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <SongList />
      </HydrationBoundary>
    </main>
  );
};

export default Page;
