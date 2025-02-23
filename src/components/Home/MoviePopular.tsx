import { useEffect } from "react";
import useGetPopularMovies from "../../hooks/useGetPopularMovies";
import { useInView } from "react-intersection-observer";
import MovieCard from "../MovieCard";
import { Movie } from "../../types/movie";

const MoviePopular = () => {
  const {
    data: popularMovies,
    isLoading: popularIsLoading,
    fetchNextPage: popularFetchNextPage,
    hasNextPage: popularHasNextPage,
    isFetchingNextPage: popularIsFetchingNextPage
  } = useGetPopularMovies();

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && popularHasNextPage && !popularIsFetchingNextPage) {
      popularFetchNextPage();
    }
  }, [
    inView,
    popularHasNextPage,
    popularIsFetchingNextPage,
    popularFetchNextPage,
    popularIsLoading
  ]);

  return (
    <div className="movie-popular-wrap section-area">
      <h3 className="main-title">인기 영화</h3>
      <div className="movie-container">
        {popularMovies?.pages.map((page) =>
          page.results.map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        )}

        {/* 무한스크롤 감지 영역 */}
        <div ref={ref} className="load-more"></div>
      </div>
    </div>
  );
};

export default MoviePopular;
