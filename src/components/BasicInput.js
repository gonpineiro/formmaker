const BasicInput = ({
  label,
  id,
  type,
  placeholder,
  value,
  handlerChange,
  disabled,
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
      />
    </div>
  );
};

export default BasicInput;
