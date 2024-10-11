import { useEffect, useRef } from "react";
import { NewStoryData } from "../../assets/storyList";
import { Card } from "../../components/Card";

export default function NewPage() {
    const gridRef = useRef(null);

    useEffect(() => {
        const cards = gridRef.current.querySelectorAll(".card-wrapper");
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.35}s`;
            setTimeout(() => {
                card.classList.add("animate");
            }, index * 200);
        });
    }, []);

    return (
        <div className="new-story-page">
            <div className="story-grid" ref={gridRef}>
                {Object.values(NewStoryData).map((book, index) => (
                    <div key={index} className="card-wrapper">
                        <Card
                            img={book.imageUrl}
                            title={book.title}
                            contentId={book.contentId}
                            pageType="new"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
