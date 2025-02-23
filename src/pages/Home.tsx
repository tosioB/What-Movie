import "@/assets/home.scss";
import MovieTopRated from "../components/Home/MovieTopRated";
import MovieNowPlaying from "../components/Home/MovieNowPlaying";
import MoviePopular from "../components/Home/MoviePopular";
import LoadingScreen from "../components/LoadingScreen";
import { useEffect, useState } from "react";

const formatDate = (date: Date) => {
  const formatted = date.toLocaleString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true // 12시간제 사용
  });

  return formatted.replace(":", "시 ") + "분"; // "2:10" → "2시 10분"
};

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="home-page">
      <LoadingScreen isLoading={isLoading} />
      {/* 메인슬라이드 - 평점 높은 영화 */}
      <MovieTopRated />

      <div className="container">
        {/* 현재 날짜 기준 */}
        <div className="current-date">
          <span>{formatDate(new Date())} 기준</span>
        </div>

        {/* 현재 상영중인 영화 */}
        <MovieNowPlaying />

        {/* 인기 영화 */}
        <MoviePopular />
      </div>
    </div>
  );
};

export default Home;
