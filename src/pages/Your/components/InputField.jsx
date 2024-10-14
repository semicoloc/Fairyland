export function InputField({ label, name, value, onChange }) {
    return (
        <div className="input-field ibm-plex-sans-kr-medium">
            <label>{label} </label>
            <input type="text" name={name} value={value} onChange={onChange} />
        </div>
    );
}
