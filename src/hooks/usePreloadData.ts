import { useQuery } from "@tanstack/react-query";

export const usePreloadData = () => {
  useQuery({
    queryKey: ["getOnlineManUsers"],
    queryFn: () => {},
  });

  useQuery({
    queryKey: ["getOnlineWomenUsers"],
    queryFn: () => {},
  });

  useQuery({
    queryKey: ["getNews"],
    queryFn: () => {},
  });

  useQuery({
    queryKey: ["getUserInfo"],
    queryFn: () => {},
  });
};
