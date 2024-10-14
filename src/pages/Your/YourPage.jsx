import { useState } from "react";
import { InputField, SelectField, TextAreaField } from "./components";
import { generateCustomStory } from "../../api/StoryGenerator";
import { Loading } from "../../components/Loading";

export default function YourPage() {
    const [storyParams, setStoryParams] = useState({
        genre: "",
        scene: "",
        character: {
            name: "",
            gender: "",
            age: "",
            trait: "",
        },
        flow: "",
        length: "",
    });
    const [generatedStory, setGeneratedStory] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const genderOptions = ["남성", "여성", "알 수 없음"];
    const lengthOptions = [
        { label: "짧음", value: 750 },
        { label: "중간", value: 1500 },
        { label: "김", value: 2000 },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name.includes(".")) {
            const [parent, child] = name.split(".");
            setStoryParams((prev) => ({
                ...prev,
                [parent]: {
                    ...prev[parent],
                    [child]: value,
                },
            }));
        } else {
            setStoryParams((prev) => ({ ...prev, [name]: value }));
        }
    };

    const generateStory = async () => {
        setIsLoading(true);
        try {
            const lengthValue =
                lengthOptions.find(
                    (option) => option.label === storyParams.length
                )?.value || "";
            const story = await generateCustomStory(
                storyParams.genre,
                storyParams.scene,
                storyParams.character.name,
                storyParams.character.gender,
                storyParams.character.age,
                storyParams.character.trait,
                storyParams.flow,
                lengthValue.toString()
            );
            setGeneratedStory(story);
        } catch (error) {
            console.error("Error generating story:", error);
            setGeneratedStory("스토리 생성 중 오류가 발생했습니다.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="your-page">
            <InputField
                label="장르"
                name="genre"
                value={storyParams.genre}
                onChange={handleInputChange}
            />
            <InputField
                label="배경"
                name="scene"
                value={storyParams.scene}
                onChange={handleInputChange}
            />

            <div className="character">
                <p className="ibm-plex-sans-kr-medium">주인공</p>
                <InputField
                    label="이름"
                    name="character.name"
                    value={storyParams.character.name}
                    onChange={handleInputChange}
                />
                <SelectField
                    label="성별"
                    name="character.gender"
                    value={storyParams.character.gender}
                    onChange={handleInputChange}
                    options={genderOptions}
                />
                <InputField
                    label="나이"
                    name="character.age"
                    value={storyParams.character.age}
                    onChange={handleInputChange}
                />
                <InputField
                    label="특징"
                    name="character.trait"
                    value={storyParams.character.trait}
                    onChange={handleInputChange}
                />
            </div>

            <TextAreaField
                label="스토리 방향"
                name="flow"
                value={storyParams.flow}
                onChange={handleInputChange}
            />
            <SelectField
                label="스토리 길이"
                name="length"
                value={storyParams.length}
                onChange={handleInputChange}
                options={lengthOptions.map((option) => option.label)}
            />

            <button onClick={generateStory} disabled={isLoading}>
                {isLoading ? "생성 중..." : "스토리 생성"}
            </button>
            {isLoading && (
                <div className="loading-indicator">
                    <Loading />
                </div>
            )}
            {generatedStory && !isLoading && (
                <div className="generated-story">
                    <p className="title ibm-plex-sans-kr-medium">
                        생성된 스토리
                    </p>
                    <p
                        className="story ibm-plex-sans-kr-medium"
                        style={{
                            marginTop: "1rem",
                            fontSize: "20px",
                            whiteSpace: "pre-wrap",
                        }}
                    >
                        {generatedStory}
                    </p>
                </div>
            )}
        </div>
    );
}
