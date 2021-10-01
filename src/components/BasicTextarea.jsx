const BasicTextarea = ({
  label,
  id,
  type,
  placeholder,
  value,
  handlerChange,
  disabled,
  rows
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <textarea
        type={type}
        className="form-control"
        id={id}
        rows={rows}
        value={value || ""}
        placeholder={placeholder || ""}
        onChange={handlerChange}
        disabled={disabled || false}
      />
    </div>
  );
};

export default BasicTextarea;
