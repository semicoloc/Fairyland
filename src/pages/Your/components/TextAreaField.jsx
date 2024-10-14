export function TextAreaField({ label, name, value, onChange }) {
    return (
        <div className="textarea-field ibm-plex-sans-kr-medium">
            <label>{label}</label>
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                rows={4} // 초기 행 수
                style={{
                    width: "100%",
                    resize: "vertical", // 수직으로만 크기 조절 가능
                    marginTop: "0.5rem", // 라벨과의 간격
                }}
            />
        </div>
    );
}
