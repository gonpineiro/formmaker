const BasicInput = ({
  label,
  id,
  type,
  placeholder,
  value,
  handlerChange,
  disabled,
  required
}) => {
  const stringValue = type === "color" ? "#FFF" : "";

  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        value={value || stringValue}
        placeholder={placeholder || ""}
        onChange={handlerChange}
        accept="image/*"
        disabled={disabled || false}
        required= {[true, 'true'].includes(required)}
      />
    </div>
  );
};

export default BasicInput;
