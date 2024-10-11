import { useNavigate } from "react-router-dom";

export function StoryBtnCard({ img, title, text, type }) {
    const navigate = useNavigate();
    const handleClick = () => [navigate(`/${type}`)];

    return (
        <div className="story-btn-card">
            <div className="btn-card-box">
                <img src={img} alt="img-thumbnail" />
            </div>
            <h4 className="kaushan-script-regular">{title}</h4>
            <button className="go-story-btn" onClick={() => handleClick(type)}>
                {text}
            </button>
        </div>
    );
}
