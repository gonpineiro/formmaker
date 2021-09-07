const Checkbox = ({
  field_id,
  field_label,
  field_placeholder,
  field_required,
  field_value,
  checked,
  setChecked,
}) => {
  const hanldeChecked = () => {
    setChecked(!checked);
  };

  return (
    <>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id={field_id}
          checked={checked}
          onChange={() => hanldeChecked()}
          required={field_required}
        />
        <label className="form-check-label" htmlFor={field_id}>
          {field_label}
        </label>
      </div>
      <div className="invalid-feedback">{field_placeholder} correctamente.</div>
      <div className="valid-feedback">¡Se ve bien!</div>
    </>
  );
};

export default Checkbox;
