import useGetNowPlayingMovies from "../hooks/useGetNowPlayingMovies";
import "@/assets/home.scss";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { Movie } from "../types/movie";

const Home = () => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetNowPlayingMovies();

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage, isLoading]);

  return (
    <div className="home-page">
      <div className="container">
        <div>개봉예정</div>
        <div>현재 시간</div>
        <div className="now-playing-movies">상영중</div>
        <div className="movie-archive">
          {data?.pages.map((page) =>
            page.results.map((movie: Movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          )}

          {/* 무한스크롤 감지 영역 */}
          <div ref={ref} className="load-more"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
