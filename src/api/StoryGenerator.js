import axios from "axios";

// OpenAI API 키 설정
const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

const getCompletionFromMessages = async (
    messages,
    model = "gpt-4o",
    temperature = 0.3
) => {
    const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
            model: model,
            messages: messages,
            temperature: temperature,
        },
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
            },
        }
    );

    return response.data.choices[0].message.content;
};

const generateNextStory = async (
    previousStory,
    currentDecisionPoint,
    nextStoryFlow,
    nextStory,
    choice,
    title
) => {
    const messages = [
        {
            role: "system",
            content: `
                You are an assistant that creates stories based on user choices.
                The story progresses based on the user's choices.
                It remembers both the previous story and the user's choices in order to generate the next part of the story.
                The story you are currently working on is called ${title}.
                Keep in mind that this is a fairy tale for children, so please keep the language clean and enriching.
                Given [previous story], [current decision point], [next story flow], [next story], and [choice], generate the story up to [next story], referencing the [next story flow] corresponding to [choice].
                The [current decision point] is separated by a '/' to show the options the user can choose from.
                Don't say anything else, just answer the story you created in Korean.
            `,
        },
        {
            role: "user",
            content: `
                [previous story] : ${previousStory}
                [current decision point] : ${currentDecisionPoint}
                [next story flow] : ${nextStoryFlow}
                [next story] : ${nextStory}
                [choice] : ${choice}
            `,
        },
    ];

    const response = await getCompletionFromMessages(messages);
    return response;
};

const cumulativeInput = async (
    choice,
    conversationHistory,
    setConversationHistory,
    title
) => {
    const {
        previous_story = "",
        current_decision_point = "",
        next_story_flow = "",
        next_story = "",
    } = conversationHistory;

    const generatedStory = await generateNextStory(
        previous_story,
        current_decision_point,
        next_story_flow,
        next_story,
        choice,
        title
    );

    setConversationHistory((prevHistory) => ({
        previous_story:
            (prevHistory.previous_story || "") + " " + generatedStory,
        current_decision_point:
            (prevHistory.next_story || "").split("/")[0] || "",
        next_story_flow: prevHistory.next_story_flow || "",
        next_story: prevHistory.next_story || "",
    }));

    return generatedStory;
};

export { cumulativeInput, generateNextStory };
