import { Link } from "react-router-dom";
import { Movie } from "../types/movie";
import { IMG_URL } from "../util/config";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="movie-card">
      <Link to="/detail">
        <span className="img-box">
          <img src={`${IMG_URL}${movie.poster_path}`} alt={movie.title} />
        </span>
        <div className="movie-detail">
          <h3 className="title">{movie.title}</h3>
          <div className="overview">
            {movie.overview ? (
              movie.overview
            ) : (
              <div className="no-overview">
                <img src="/images/emoji_sad.svg" alt="이모지 - 슬픈 얼굴" />
                <p>영화 설명이 없습니다.연결 재 테스트</p>
              </div>
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
