import TextToSpeech from "../api/TextToSpeech";

export function StoryCard({ imgUrl, text }) {
    return (
        <div className="slide-box">
            <div className="img-box">
                <img src={imgUrl} alt="img" />
            </div>
            <TextToSpeech text={text} />
            <p className="ibm-plex-sans-kr-medium ">{text}</p>
        </div>
    );
}
