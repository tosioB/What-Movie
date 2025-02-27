import { Link } from "react-router-dom";
import { Movie } from "../types/movie";
import { IMG_URL } from "../util/config";
import NoData from "./NoData";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="movie-card">
      <Link to="/detail" key={movie.id} state={movie}>
        <span className="img-box">
          <img src={`${IMG_URL}${movie.poster_path}`} alt={movie.title} />
        </span>
        <div className="detail-box">
          <h4 className="title">{movie.title}</h4>
          <div className="overview">
            {movie.overview ? (
              movie.overview
            ) : (
              <NoData
                data="영화 설명"
                gap="0.8rem"
                height="100%"
                fontSize="1.6rem"
              />
            )}
          </div>
          <div className="bottom-box">
            <span className="average">{movie.vote_average.toFixed(1)}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
