import React, { useContext } from "react";

import { FormContext } from "../../screens/FormContext";
import { asteriscos } from "../../utils";
import { DEFAULT_LABEL_COLOR } from "../../config/config";

const Select = ({
  field_id,
  field_name,
  field_label,
  field_required,
  field_placeholder,
  field_options,
}) => {
  const { handleChange } = useContext(FormContext);
  const isRequired = field_required === "true";
  return (
    <>
      <div className="mb-3">
        <div className="card">
          <div className="card-body">
            <label className="form-label" style={{ color: DEFAULT_LABEL_COLOR }}>
              {field_label}
              {asteriscos(field_required)}
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(event) => handleChange(field_id, event)}
              id={"id" + field_id}
              name={field_name}
              required={isRequired && "required"}
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
