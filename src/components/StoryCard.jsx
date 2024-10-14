import TextToSpeech from "../api/TextToSpeech";

export function StoryCard({ imgUrl, text, isLastPage, onNavigate }) {
    return (
        <div className="slide-box">
            <div className="img-box">
                <img src={imgUrl} alt="img" />
            </div>
            <TextToSpeech text={text} />
            <p className="ibm-plex-sans-kr-medium ">{text}</p>
            {isLastPage && (
                <button
                    onClick={onNavigate}
                    className="other-story-btn ibm-plex-sans-kr-medium"
                >
                    다른 동화 보러가기
                </button>
            )}
        </div>
    );
}
