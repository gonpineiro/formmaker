const Checkbox = ({
  field_id,
  field_label,
  field_placeholder,
  field_required,
  field_value,
  checked,
  setChecked,
  field_options,
  field_name,
}) => {
  const hanldeChecked = () => {
    setChecked(!checked);
  };
  const isRequired = field_required === "true";
  return (
    <>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id={field_id}
          checked={checked}
          onChange={hanldeChecked}
          required={isRequired && "required"}
        />
        <label className="form-check-label" htmlFor={field_id}>
          {field_label}
        </label>
      </div>
    </>
  );
};

export default Checkbox;
