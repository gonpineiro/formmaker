import React, { useContext, useState } from "react";

import { FormContext } from "../../screens/FormContext";
import { asteriscos } from "../../utils";
import { DEFAULT_LABEL_COLOR } from "../../config/config";

const Input = ({
  field_id,
  field_name,
  field_label,
  field_placeholder,
  field_required,
  field_max,
  field_value,
}) => {
  const { handleChange } = useContext(FormContext);  
  const [count, setCount] = useState(0);

  const isRequired = field_required === "true";  

  const handleInputChange = (event) => {
    handleChange(field_id, event);
  };

  return (
    <div className="mb-3">
      <div className="card">
        <div className="card-body">
          <label
            htmlFor={"id" + field_id}
            className="form-label"
            style={{ color: DEFAULT_LABEL_COLOR }}
          >
            {field_label}
            {asteriscos(field_required)}
          </label>
          <textarea
            rows="5"
            type="text"
            className="form-control"
            id={"id" + field_id}
            name={field_name}
            aria-describedby={field_id + "Help"}
            placeholder={field_placeholder ? field_placeholder : ""}
            value={field_value.slice(0, field_max)}
            onChange={handleInputChange}
            onKeyUp={(e) => setCount(e.target.value.length)}
            required={isRequired && "required"}
          />
          <p>
            {count}/{field_max}
          </p>
          <div className="invalid-feedback">
            {field_placeholder} correctamente.
          </div>
          <div className="valid-feedback">¡Se ve bien!</div>
        </div>
      </div>
    </div>
  );
};

export default Input;
