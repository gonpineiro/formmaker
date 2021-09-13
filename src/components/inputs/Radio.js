import React, { useContext } from "react";
import { FormContext } from "../../screens/FormContext";
const Radio = ({
  field_id,
  field_name,
  field_label,
  field_required,
  field_options,
  field_placeholder,
}) => {
  const { handleChange } = useContext(FormContext);

  return (
    <>
      <div className="mb-3">
        <div className="card">
          <div className="card-body">
            <label className="form-label" style={{ color: "#143c75" }}>
              {field_label}
            </label>
            {field_options.length > 0 &&
              field_options.map((option, i) => (
                <div key={i} className="form-check">
                  <input
                    required={field_required}
                    className="form-check-input"
                    type="radio"
                    onChange={(event) => handleChange(field_id, event)}
                    id={"id" + option.option_label}
                    name={field_name}
                  />
                  <label className="form-check-label" htmlFor={"id" + field_id}>
                    {option.option_label}
                  </label>
                </div>
              ))}
            <div className="invalid-feedback">
              {field_placeholder} correctamente.
            </div>
            <div className="valid-feedback">¡Se ve bien!</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Radio;
