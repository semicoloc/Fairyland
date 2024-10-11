import { StoryBtnCard } from "./StoryBtnCard";

export function StoryButton() {
    return (
        <div className="story-button">
            <StoryBtnCard
                img="/thumbnail/origin.webp"
                title={"Origin Story"}
                text={"READ ORIGIN"}
                type={"origin"}
            />
            <StoryBtnCard
                img="/thumbnail/new.webp"
                title={"New Story"}
                text={"READ NEW"}
                type={"new"}
            />
        </div>
    );
}
