import React, { useContext } from "react";
import { FormContext } from "../../screens/FormContext";

const Input = ({
  field_id,
  field_label,
  field_placeholder,
  field_required,
  field_value,
  field_min,
  field_max,
}) => {
  const { handleChange } = useContext(FormContext);
  return (
    <div className="mb-3">
      <label htmlFor={"id" + field_id} className="form-label">
        {field_label}
      </label>
      <input
        type="text"
        className={"form-control "}
        id={"id" + field_id}
        aria-describedby={field_id + "Help"}
        placeholder={field_placeholder ? field_placeholder : ""}
        value={field_value.slice(0, field_max)}
        onChange={(event) => handleChange(field_id, event)}
        required={field_required}
        minLength={field_min}
        maxLength={field_max}
      />
      <div className="invalid-feedback">{field_placeholder} correctamente.</div>
      <div className="valid-feedback">¡Se ve bien!</div>
    </div>
  );
};

export default Input;
