import "@/assets/detail.scss";
import DetailWrap from "../components/Detail/DetailWrap";
import { useLocation } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import useLoadingScreen from "../hooks/useLoadingScreen";
import ActorWrap from "../components/Detail/ActorWrap";
import TrailerWrap from "../components/Detail/TrailerWrap";

const Detail = () => {
  const isLoading = useLoadingScreen();
  const location = useLocation();
  const movie = location.state;

  return (
    <div className="detail-page">
      <LoadingScreen isLoading={isLoading} />
      <DetailWrap movie={movie} />
      <div className="container">
        {/* 출연 배우 */}
        <ActorWrap movieId={movie.id} />

        {/* 트레일러 */}
        <TrailerWrap movieId={movie.id} />
      </div>
    </div>
  );
};

export default Detail;
