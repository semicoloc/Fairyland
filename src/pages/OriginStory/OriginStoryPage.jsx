import { useParams } from "react-router-dom";
import { OriginStoryData } from "../../assets/storyList";

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
            <h1>{story.title}</h1>
            <img src={story.imageUrl} alt={story.title} />
            {Object.entries(story.story).map(([key, text]) => (
                <p key={key}>{text}</p>
            ))}
        </div>
    );
}
