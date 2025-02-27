import { useEffect, useState } from "react";
import { API_KEY, BASE_URL } from "../../util/config";
import MainTitle from "../common/MainTitle";
import NoData from "../NoData";

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
          <NoData
            data="트레일러"
            gap="2rem"
            height="30rem"
            fontSize="2.4rem"
            isBorder={true}
          />
        )}
      </div>
    </div>
  );
};

export default TrailerWrap;
