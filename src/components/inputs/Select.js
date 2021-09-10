import React, { useContext } from "react";
import { FormContext } from "../../screens/FormContext";
const Select = ({
  field_id,
  field_name,
  field_label,
  field_required,
  field_placeholder,
  field_value,
  field_options,
}) => {
  const { handleChange } = useContext(FormContext);
  const astericos = () => {
    if (field_required === "required") {
      return <span className="text-danger fw-bold"> *</span>;
    }
  };
  return (
    <>
      <div className="mb-3">
        <div className="card">
          <div className="card-body">
            <label className="form-label" style={{ color: "#143c75" }}>
              {field_label}
              {astericos()}
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(event) => handleChange(field_id, event)}
              id={"id" + field_id}
              name={field_name}
              required={field_required}
            >
              <option value="">Elegir opción</option>
              {field_options.length > 0 &&
                field_options.map((option, i) => (
                  <option value={option.field_placeholder} key={i}>
                    {option.option_label}
                  </option>
                ))}
            </select>
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

export default Select;
