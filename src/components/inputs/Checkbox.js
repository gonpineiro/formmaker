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
                {field_label}
              </label>
              {field_options.forEach((element) => {
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id={element.option_label}
                  />
                  <label
                    className="form-check-label"
                    for={element.option_label}
                  >
                    Default checkbox
                  </label>
                </div>;
                console.log(element.option_label);
              })}
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
