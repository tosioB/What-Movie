import { useInfiniteQuery } from "@tanstack/react-query";
import { API_KEY } from "../util/config";

const fetchPopularMovies = async ({ pageParam = 1 }: { pageParam: number }) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=ko&include_adult=false&page=${pageParam}`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`
      }
    }
  );

  if (!response.ok) {
    throw new Error("인기 영화 데이터를 불러오는데 실패했습니다.");
  }

  return response.json();
};

const useGetPopularMovies = () => {
  return useInfiniteQuery({
    queryKey: ["popular-movie"],
    queryFn: fetchPopularMovies,
    getNextPageParam: (lastPage) => {
      // 다음 페이지가 있으면 page + 1 반환, 없으면 undefined 반환
      return lastPage.page < lastPage.total_pages
        ? lastPage.page + 1
        : undefined;
    },
    initialPageParam: 1
  });
};

export default useGetPopularMovies;
