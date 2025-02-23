import { useInfiniteQuery } from "@tanstack/react-query";
import { API_KEY } from "../util/config";

const fetchPopularMovies = async ({ pageParam = 1 }: { pageParam: number }) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=ko&page=${pageParam}`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`
      }
    }
  );
  return response.json();
};

const useGetPopularMovies = () => {
  return useInfiniteQuery({
    queryKey: ["popular-movie"],
    queryFn: fetchPopularMovies,
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
    initialPageParam: 1
  });
};

export default useGetPopularMovies;
