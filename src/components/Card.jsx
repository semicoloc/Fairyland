import { useNavigate } from "react-router-dom";

export function Card({ img, title, contentId, pageType }) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (pageType === "origin") {
            navigate(`/origin-story/${contentId}`);
        } else if (pageType === "new") {
            navigate(`/new-story/${contentId}`);
        }
    };

    return (
        <div className="story-card" onClick={handleClick}>
            <div className="story-card-box">
                <img src={img} alt="img-thumbnail" />
                <h4 className="ibm-plex-sans-kr-medium">{title}</h4>
            </div>
        </div>
    );
}
