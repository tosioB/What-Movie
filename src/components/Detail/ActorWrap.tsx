import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { API_KEY, BASE_URL, IMG_URL } from "../../util/config";
import { useEffect, useState } from "react";
import MainTitle from "../common/MainTitle";
import NoData from "../NoData";

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
        <NoData
          data="출연 배우 정보"
          gap="2rem"
          height="24rem"
          fontSize="2.4rem"
          isBorder={true}
        />
      ) : (
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }}
          spaceBetween={32}
          slidesPerView={2}
          className="actor-swiper"
          breakpoints={{
            520: {
              spaceBetween: 40,
              slidesPerView: 3
            },
            768: {
              spaceBetween: 40,
              slidesPerView: 4
            },
            1024: {
              spaceBetween: 40,
              slidesPerView: 5
            },
            1200: {
              spaceBetween: 40,
              slidesPerView: 6
            }
          }}
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
                  <NoData
                    data="프로필 사진"
                    gap="0.8rem"
                    height="100%"
                    fontSize="1.6rem"
                  />
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
