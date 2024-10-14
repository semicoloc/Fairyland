import { useEffect, useState } from "react";
import { cumulativeInput } from "../api/StoryGenerator";
import { useNavigate, useParams } from "react-router-dom";
import TextToSpeech from "../api/TextToSpeech";
import { NewStoryData } from "../assets/storyList";
import { Loading } from "./Loading";

export const NewStoryComponent = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    const [count, setCount] = useState(0);
    const [fullStory, setFullStory] = useState("");
    const [showFullStory, setShowFullStory] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const storyData = NewStoryData[`book${id}`];
    const [story, setStory] = useState(storyData?.initStory || "");
    const [conversationHistory, setConversationHistory] = useState({
        previous_story: storyData?.initStory || "",
        current_decision_point:
            storyData?.conversationHistory?.currentDecisionPoint || "",
        next_story_flow: storyData?.conversationHistory?.nextStoryFlow || "",
        next_story: storyData?.conversationHistory?.nextStory || "",
    });

    useEffect(() => {
        if (!storyData) {
            navigate("/story");
        } else if (!storyData.initStory) {
            setFullStory("");
            setStory("");
        } else {
            setFullStory(storyData.initStory);
            setStory(storyData.initStory);
        }
    }, [storyData, navigate]);

    if (!storyData) {
        return <div>Loading...</div>;
    }

    const renderEmptyStory = () => (
        <div className="empty-story">
            <p>아직 생성된 이야기가 없습니다.</p>
            <button
                onClick={() => navigate("/new")}
                className="ibm-plex-sans-kr-medium"
            >
                다른 스토리 보러가기
            </button>
        </div>
    );

    const handleUserChoice = async (choice) => {
        if (!storyData.decisionPoints[count] || !storyData.storyFlows[count]) {
            console.error("Missing story data for this choice");
            return;
        }

        setIsLoading(true); // 로딩 시작

        try {
            const newStory = await cumulativeInput(
                choice,
                conversationHistory,
                setConversationHistory,
                storyData.engTitle
            );

            setConversationHistory((prevHistory) => ({
                previous_story: prevHistory.previous_story + " " + newStory,
                current_decision_point:
                    storyData.decisionPoints[count + 1] || "",
                next_story_flow: storyData.storyFlows[count + 1] || "",
                next_story: storyData.nextStories[count + 1] || "",
            }));

            setStory(newStory);
            setFullStory((prevFullStory) => prevFullStory + " " + newStory);
            setCount((prevCount) => prevCount + 1);
        } catch (error) {
            console.error("Error generating story:", error);
        } finally {
            setIsLoading(false); // 로딩 종료
        }
    };

    const selectKeys = ["first", "second", "third"];
    const currentSelects = storyData.selects[selectKeys[count]];

    const question =
        count < 3 && currentSelects && currentSelects.length > 0
            ? `다음 내용으로 진행할 스토리를 골라주세요. 1. ${currentSelects[0]}, 2. ${currentSelects[1]}`
            : "";

    return (
        <div className={`new-story-component`}>
            <div className="img-box">
                <img src={storyData.imageUrl} alt="" />
            </div>
            {storyData.initStory ? (
                <>
                    <TextToSpeech
                        text={showFullStory ? fullStory : story}
                        apiKey={apiKey}
                    />
                    <div className="new-story-box ibm-plex-sans-kr-medium">
                        {showFullStory ? fullStory : story}
                    </div>
                    {isLoading && (
                        <div className="loading-indicator">
                            <Loading />
                        </div>
                    )}
                    {count === 3 && (
                        <div className="story-end-buttons">
                            <button
                                onClick={() => setShowFullStory(!showFullStory)}
                                className="ibm-plex-sans-kr-medium"
                            >
                                {showFullStory
                                    ? "현재 스토리 보기"
                                    : "전체 스토리 보기"}
                            </button>
                            <button
                                onClick={() => navigate("/new")}
                                className="ibm-plex-sans-kr-medium"
                            >
                                다른 스토리 보러가기
                            </button>
                        </div>
                    )}
                    {count < 3 &&
                        currentSelects &&
                        currentSelects.length > 0 && (
                            <div className="new-story-choice ibm-plex-sans-kr-medium ">
                                <TextToSpeech text={question} apiKey={apiKey} />
                                <p>
                                    Q{count + 1}. 다음 내용으로 진행할 스토리를
                                    골라주세요.
                                </p>
                                <div className="new-story-create">
                                    {currentSelects.map((option, index) => (
                                        <button
                                            key={index}
                                            onClick={() =>
                                                handleUserChoice(option)
                                            }
                                            className="ibm-plex-sans-kr-medium"
                                            disabled={isLoading}
                                        >
                                            {index + 1}. {option}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                </>
            ) : (
                renderEmptyStory()
            )}
        </div>
    );
};
