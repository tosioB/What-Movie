import { Swiper, SwiperSlide } from "swiper/react";
import { Movie } from "../../types/movie";
import { Navigation, Pagination } from "swiper/modules";
import useGetMovies from "../../hooks/useGetMovie";
import { Link } from "react-router-dom";
import { IMG_URL } from "../../util/config";
import { useEffect, useState } from "react";

const MovieTopRated = () => {
  const { data: topRatedMovies } = useGetMovies("top_rated");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 520);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 520);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="movie-top-rated-wrap">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }}
        pagination={{ clickable: true }}
        loop={true}
      >
        {topRatedMovies?.results?.map((movie: Movie) => {
          const imagePath = isMobile ? movie.poster_path : movie.backdrop_path;

          return (
            <SwiperSlide key={movie.id}>
              <Link to="/detail" key={movie.id} state={movie}>
                <span className="img-box">
                  <img src={`${IMG_URL}${imagePath}`} alt={movie.title} />
                </span>
                <div className="container">
                  <div className="detail-box">
                    <h2 className="title">{movie.title}</h2>
                    <p className="overview">{movie.overview}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
        <div className="swiper-button-prev swiper-nav-btn">Prev</div>
        <div className="swiper-button-next swiper-nav-btn">Next</div>
      </Swiper>
    </div>
  );
};

export default MovieTopRated;
