import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

export function StorySwiper() {
    return (
        <div className="swiper">
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1}
                spaceBetween={60}
                initialSlide={1}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                modules={[EffectCoverflow, Pagination]}
                breakpoints={{
                    // 650px 이상일 때
                    300: {
                        slidesPerView: 1,
                    },
                    // 1080px 이상일 때
                    650: {
                        slidesPerView: 2,
                    },
                    // 1440px 이상일 때 (원래 설정)
                    1080: {
                        slidesPerView: 3,
                    },
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="slide-box">
                        <div className="thumbnail">
                            <img src="/thumbnail/pig.png" alt="pig" />
                        </div>
                        <h3 className="ibm-plex-sans-kr-medium">
                            아기돼지 삼형제
                        </h3>
                        <button className="swiper-btn">READ STORY</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-box">
                        <div className="thumbnail">
                            <img src="/thumbnail/rabbit&tuttle.png" alt="rt" />
                        </div>
                        <h3 className="ibm-plex-sans-kr-medium">
                            토끼와 거북이
                        </h3>
                        <button className="swiper-btn">READ STORY</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-box">
                        <div className="thumbnail">
                            <img src="/thumbnail/gold&silver.png" alt="gs" />
                        </div>
                        <h3 className="ibm-plex-sans-kr-medium">
                            금도끼 은도끼
                        </h3>
                        <button className="swiper-btn">READ STORY</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
