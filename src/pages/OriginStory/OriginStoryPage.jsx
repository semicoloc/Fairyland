import { useParams } from "react-router-dom";
import { OriginStoryData } from "../../assets/storyList";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { Pagination } from "swiper/modules";
import { StoryCard } from "../../components";
import TextToSpeech from "../../api/TextToSpeech";

export default function OriginStoryPage() {
    const { id } = useParams();
    const story = Object.values(OriginStoryData).find(
        (book) => book.contentId === parseInt(id)
    );

    if (!story) {
        return <div>Story not found</div>;
    }

    return (
        <div>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="cardSwiper"
            >
                <SwiperSlide>
                    <div className="slide-box">
                        <div className="img-box">
                            <img src={story.imageUrl} alt={story.title} />
                        </div>
                        <TextToSpeech text={story.title} />
                        <h5 className="ibm-plex-sans-kr-medium ">
                            {story.title}
                        </h5>
                    </div>
                </SwiperSlide>
                {Object.entries(story.story).map(([key, text]) => (
                    <SwiperSlide key={key}>
                        <StoryCard
                            imgUrl={story.img[`img${key.slice(4)}`]}
                            text={text}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
