export function Loading() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100px"
            viewBox="0 -960 960 960"
            width="100px"
        >
            <defs>
                <mask id="bookMask">
                    <rect
                        x="0"
                        y="-960"
                        width="960"
                        height="960"
                        fill="white"
                    />
                    <path
                        d="M200-313q10-3 19.5-5t20.5-2h40v-480h-40q-17 0-28.5 11.5T200-760v447Zm40 233q-50 0-85-35t-35-85v-560q0-50 35-85t85-35h280v80H360v480h240v-120h80v200H240q-17 0-28.5 11.5T200-200q0 17 11.5 28.5T240-160h520v-320h80v400H240Zm-40-233v-487 487Zm500-167q0-92 64-156t156-64q-92 0-156-64t-64-156q0 92-64 156t-156 64q92 0 156 64t64 156Z"
                        fill="black"
                    />
                </mask>
            </defs>
            <rect
                x="200"
                y="-760"
                width="560"
                height="600"
                fill="#FF69B4"
                mask="url(#bookMask)"
            >
                <animate
                    attributeName="height"
                    values="0;600"
                    dur="2s"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="y"
                    values="-160;-760"
                    dur="2s"
                    repeatCount="indefinite"
                />
            </rect>
            <path
                d="M200-313q10-3 19.5-5t20.5-2h40v-480h-40q-17 0-28.5 11.5T200-760v447Zm40 233q-50 0-85-35t-35-85v-560q0-50 35-85t85-35h280v80H360v480h240v-120h80v200H240q-17 0-28.5 11.5T200-200q0 17 11.5 28.5T240-160h520v-320h80v400H240Zm-40-233v-487 487Zm500-167q0-92 64-156t156-64q-92 0-156-64t-64-156q0 92-64 156t-156 64q92 0 156 64t64 156Z"
                fill="black"
                stroke="black"
                strokeWidth="2"
            />
        </svg>
    );
}
