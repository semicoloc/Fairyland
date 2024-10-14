export function SelectField({ label, name, value, onChange, options }) {
    return (
        <div className="select-field ibm-plex-sans-kr-medium">
            <label>{label}</label>
            <select
                name={name}
                value={value}
                onChange={onChange}
                className="ibm-plex-sans-kr-medium"
            >
                <option value="">{label}</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}
