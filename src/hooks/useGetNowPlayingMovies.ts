import { useInfiniteQuery } from "@tanstack/react-query";

const fetchNowPlayingMovies = async ({
  pageParam = 1
}: {
  pageParam: number;
}) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?language=ko&page=${pageParam}`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
      }
    }
  );
  return response.json();
};

const useGetNowPlayingMovies = () => {
  return useInfiniteQuery({
    queryKey: ["now-playing-movie"],
    queryFn: fetchNowPlayingMovies,
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
    initialPageParam: 1
  });
};

export default useGetNowPlayingMovies;
