import { useLocation } from "react-router-dom";
import { IMG_URL } from "../util/config";
import "@/assets/detail.scss";

const Detail = () => {
  const location = useLocation();
  const movie = location.state;

  return (
    <div className="detail-page">
      <div className="detail-box">
        <img
          src={`${IMG_URL}${movie.backdrop_path}`}
          alt={movie.title}
          className="bg-img"
        />
      </div>
      <div className="container">
        <div className="actor-wrap section-area">
          <h3 className="main-title">출연 배우</h3>
        </div>
        <div className="trailer section-area">
          <h3 className="main-title">트레일러</h3>
        </div>
      </div>
    </div>
  );
};

export default Detail;
