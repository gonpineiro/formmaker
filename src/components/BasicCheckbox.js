const BasicCheckbox = ({ label, id, checked, handlerChange }) => {
  return (
    <div className="mb-3">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={checked}
          onChange={handlerChange}
          id={id}
        />
        <label className="form-check-label" htmlFor={id}>
          {label}
        </label>
      </div>
    </div>
  );
};

export default BasicCheckbox;
