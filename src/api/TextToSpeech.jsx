import { useState, useRef } from "react";

const TextToSpeech = ({ text }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const audioRef = useRef(null);
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

    const handlePlay = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(
                "https://api.openai.com/v1/audio/speech",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${apiKey}`,
                    },
                    body: JSON.stringify({
                        model: "tts-1",
                        voice: "nova",
                        input: text,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const arrayBuffer = await response.arrayBuffer();
            const blob = new Blob([arrayBuffer], { type: "audio/mpeg" });
            const url = URL.createObjectURL(blob);

            setIsLoading(false);

            // Automatically play the audio once it's ready
            if (audioRef.current) {
                audioRef.current.src = url;
                audioRef.current.play();
            }
        } catch (error) {
            console.error("Speech synthesis failed.", error);
            setIsLoading(false);
        }
    };

    return (
        <div className="text-to-speech">
            <button
                onClick={handlePlay}
                disabled={isLoading}
                className="audio_btn"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {isLoading ? (
                    <i className="fa-solid fa-spinner"></i>
                ) : (
                    <i className="fa-solid fa-volume-high"></i>
                )}
            </button>
            <audio ref={audioRef} />
        </div>
    );
};

export default TextToSpeech;
