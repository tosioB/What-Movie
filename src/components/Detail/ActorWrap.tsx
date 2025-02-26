import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { API_KEY, BASE_URL, IMG_URL } from "../../util/config";
import { useEffect, useState } from "react";
import MainTitle from "../common/MainTitle";

interface ActorWrapProps {
  movieId: number;
}

interface Actor {
  cast_id: number;
  original_name: string;
  profile_path: string;
}

const ActorWrap = ({ movieId }: ActorWrapProps) => {
  // 영화 출연진 데이터 호출
  const [actors, setActors] = useState<Actor[]>([]);

  useEffect(() => {
    const fetchMovieActor = async () => {
      const response = await fetch(`${BASE_URL}/${movieId}/credits`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`
        }
      });

      if (!response.ok) {
        throw new Error(`출연 배우 데이터를 불러오는데 실패했습니다.`);
      }

      const data = await response.json();
      setActors(data.cast);
    };

    fetchMovieActor();
  }, [movieId]);

  return (
    <div className="actor-wrap section-area">
      <MainTitle title="출연 배우" />
      {actors.length === 0 ? (
        <div className="no-actor">
          <img src="/images/emoji_sad.svg" alt="이모지 - 슬픈 얼굴" />
          <p>출연 배우 정보가 없습니다.</p>
        </div>
      ) : (
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }}
          spaceBetween={40}
          slidesPerView={5}
          className="actor-swiper"
        >
          {actors.map((actor: Actor) => {
            return (
              <SwiperSlide key={actor.cast_id}>
                {actor.profile_path ? (
                  <img
                    src={`${IMG_URL}${actor.profile_path}`}
                    className="actor-profile-img"
                  />
                ) : (
                  <div className="no-profile">
                    <img src="/images/emoji_sad.svg" alt="이모지 - 슬픈 얼굴" />
                    <p>프로필 사진이 없습니다.</p>
                  </div>
                )}

                <p className="actor-name">{actor.original_name}</p>
              </SwiperSlide>
            );
          })}
          <div className="swiper-button-prev swiper-nav-btn">Prev</div>
          <div className="swiper-button-next swiper-nav-btn">Next</div>
        </Swiper>
      )}
    </div>
  );
};

export default ActorWrap;
