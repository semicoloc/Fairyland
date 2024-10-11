import { StoryButton, StorySwiper } from "./components";

export default function HomePage() {
    return (
        <div>
            <div className="home01">
                <StorySwiper />
            </div>
            <div className="home02">
                <StoryButton />
            </div>
            <div className="back-gif">
                <img src="fly.gif" alt="" />
            </div>
        </div>
    );
}
