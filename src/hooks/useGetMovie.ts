import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../api/fetchMovie";

const useGetMovies = (category: string) => {
  return useQuery({
    queryKey: [category],
    queryFn: () => fetchMovies(category)
  });
};

export default useGetMovies;
