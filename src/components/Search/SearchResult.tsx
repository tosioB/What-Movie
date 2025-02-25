import { Movie } from "../../types/movie";
import LoadingSpinner from "../LoadingSpinner";
import MovieCard from "../MovieCard";

interface SearchResultProps {
  movies: Movie[];
  isFetching: boolean;
  error: boolean;
  handleLoadMore: () => void;
  totalPages: number;
  currentPage: number;
}

const SearchResult = ({
  movies,
  isFetching,
  error,
  handleLoadMore,
  totalPages,
  currentPage
}: SearchResultProps) => {
  return (
    <div className="search-result">
      {isFetching && <LoadingSpinner />}
      {error && <p>검색 중 오류 발생</p>}
      {movies.length ? (
        <>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
          {currentPage < totalPages && (
            <button className="load-more-btn" onClick={handleLoadMore}>
              영화 더보기
            </button>
          )}
        </>
      ) : (
        !isFetching && (
          <div className="no-search-result">
            <img src="/images/emoji_sad.svg" alt="이모지 - 슬픈 얼굴" />
            <p>검색 결과가 없습니다.</p>
          </div>
        )
      )}
    </div>
  );
};

export default SearchResult;
