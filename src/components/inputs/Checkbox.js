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
  if (typeof field_options !== "undefined") {
    return (
      <>
        <div className="mb-3">
          <div className="card">
            <div className="card-body">
              <label className="form-check-label" htmlFor={field_id}>
                {field_label + " sdfsad"}
              </label>
              {field_options.lenght > 0 &&
                field_options.map((option, i) => (
                  <div className="form-check" key={i}>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id={"id" + option.option_label}
                      //name={field_name}
                      value={option.option_label}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={"id" + option.option_label}
                    >
                      {option.option_label}
                    </label>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id={field_id}
          checked={checked}
          onChange={hanldeChecked}
          required={field_required}
        />
        <label className="form-check-label" htmlFor={field_id}>
          {field_label + " ohohoh"}
        </label>
      </div>
    </>
  );
};

export default Checkbox;
