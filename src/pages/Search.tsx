import "@/assets/search.scss";
import { useEffect, useState } from "react";
import { API_KEY } from "../util/config";
import { useQuery } from "@tanstack/react-query";
import { Movie } from "../types/movie";
import { useLocation, useNavigate } from "react-router-dom";
import SearchInpBox from "../components/Search/SearchInpBox";
import SearchResult from "../components/Search/SearchResult";

const fetchSearchMovies = async ({
  query,
  page
}: {
  query: string;
  page: number;
}) => {
  if (!query) return { results: [], total_pages: 1 };

  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
      query
    )}&language=ko&include_adult=false&page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`
      }
    }
  );

  if (!response.ok) throw new Error("검색 실패!");
  return response.json();
};

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // URL에서 초기 검색어 읽어오기
  const queryParams = new URLSearchParams(location.search);
  const initialQuery = queryParams.get("query") || "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<Movie[]>([]);

  const { data, isFetching, error } = useQuery({
    queryKey: ["searchMovies", searchQuery, page], // 페이지 변경될 때마다 refetch
    queryFn: () => fetchSearchMovies({ query: searchQuery, page })
  });

  useEffect(() => {
    if (data) {
      setMovies((prev) =>
        page === 1 ? data.results : [...prev, ...data.results]
      );
    }
  }, [data, page]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setMovies([]); // 기존 검색 결과 초기화
    setPage(1);
    navigate(`/search?query=${query}`);
  };

  const handleLoadMore = () => {
    if (data && page < data.total_pages) {
      setPage((prev) => prev + 1); // 🔹 페이지 번호만 증가 (useQuery가 자동 호출됨)
    }
  };

  return (
    <div className="search-page">
      <div className="container">
        {/* 검색 영역 */}
        <SearchInpBox onSearch={handleSearch} initialQuery={initialQuery} />

        {/* 타이틀 영역 */}
        <h3 className="main-title">
          {searchQuery ? `검색결과: ${searchQuery}` : "아무것도 검색되지 않음"}
        </h3>

        {/* 검색 결과 영역 */}
        <SearchResult
          movies={movies}
          isFetching={isFetching}
          error={!!error}
          handleLoadMore={handleLoadMore}
          totalPages={data?.total_pages || 1}
          currentPage={page}
        />
      </div>
    </div>
  );
};

export default Search;
