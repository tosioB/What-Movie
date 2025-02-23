import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../MovieCard";
import { Movie } from "../../types/movie";
import { Navigation } from "swiper/modules";
import useGetMovies from "../../hooks/useGetMovie";

const MovieNowPlaying = () => {
  const { data: nowPlayingMovies } = useGetMovies("now_playing");

  return (
    <div className="movie-now-playing-wrap section-area">
      <h3 className="main-title">상영중인 영화</h3>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }}
        spaceBetween={40}
        slidesPerView={4}
      >
        {nowPlayingMovies?.results.map((movie: Movie) => {
          return (
            <SwiperSlide key={movie.id}>
              <MovieCard key={movie.id} movie={movie} />
            </SwiperSlide>
          );
        })}
        <div className="swiper-button-prev swiper-nav-btn">Prev</div>
        <div className="swiper-button-next swiper-nav-btn">Next</div>
      </Swiper>
    </div>
  );
};

export default MovieNowPlaying;
