import { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "../../util/config";
import MainTitle from "../common/MainTitle";

interface TrailerWrapProps {
  movieId: number;
}

interface Trailer {
  type: string;
  key: string;
}

const TrailerWrap = ({ movieId }: TrailerWrapProps) => {
  const [videos, setVideos] = useState<Trailer[]>([]);
  useEffect(() => {
    const fetchMovieActor = async () => {
      const response = await fetch(
        `${BASE_URL}/${movieId}/videos?language=ko`,
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`
          }
        }
      );

      if (!response.ok) {
        throw new Error(`트레일러 데이터를 불러오는데 실패했습니다.`);
      }

      const data = await response.json();
      setVideos(data.results);
    };

    fetchMovieActor();
  }, [movieId]);

  const trailer = videos.find((item) => item.type === "Trailer");

  return (
    <div className="trailer-wrap section-area">
      <MainTitle title="트레일러" />
      <div className="trailer">
        {trailer ? (
          <iframe
            width="100%"
            height="auto"
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title="YouTube trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="no-trailer">
            <img src="/images/emoji_sad.svg" alt="이모지 - 슬픈 얼굴" />
            <p>트레일러가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrailerWrap;
