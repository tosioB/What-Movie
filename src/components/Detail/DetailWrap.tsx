import { Movie } from "../../types/movie";
import { IMG_URL } from "../../util/config";
import { getGenreName } from "../../util/genre";

interface DetailWrapProps {
  movie: Movie;
}

const DetailWrap = ({ movie }: DetailWrapProps) => {
  return (
    <div className="detail-wrap">
      <img
        src={`${IMG_URL}${movie.backdrop_path}`}
        alt={movie.title}
        className="bg-img"
      />
      <div className="detail-box">
        <img
          src={`${IMG_URL}${movie.poster_path}`}
          alt={movie.title}
          className="poster-img"
        />
        <div className="movie-info">
          <h2 className="title">{movie.title}</h2>
          <ul className="genre-list">
            {movie.genre_ids.map((genreId: number) => (
              <li key={genreId}>{getGenreName(genreId)}</li>
            ))}
            <li className="average">
              <img src="/images/star.svg" />
              <span>{movie.vote_average.toFixed(1)}</span>
            </li>
          </ul>
          <p className="overview">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailWrap;
