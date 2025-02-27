import { Movie } from "../../types/movie";
import LoadingSpinner from "../LoadingSpinner";
import MovieCard from "../MovieCard";
import NoData from "../NoData";

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
      <div className="search-result-wrap">
        {isFetching && <LoadingSpinner />}
        {error && <p>검색 중 오류 발생</p>}
        {movies.length ? (
          <>
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </>
        ) : (
          !isFetching && (
            <NoData data="검색 결과" gap="1.2rem" fontSize="2rem" />
          )
        )}
      </div>
      {currentPage < totalPages && (
        <button className="load-more-btn" onClick={handleLoadMore}>
          영화 더보기
        </button>
      )}
    </div>
  );
};

export default SearchResult;
