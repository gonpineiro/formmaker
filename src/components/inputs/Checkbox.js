import React, { useContext } from "react";
import { FormContext } from "../../screens/FormContext";

const Checkbox = ({
  field_id,
  field_label,
  field_placeholder,
  field_required,
  field_value,
}) => {
  const { handleChange } = useContext(FormContext);
  return (
    <>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id={field_id}
          //checked={field_value}
          onChange={(event) => handleChange(field_id, event)}
          required={field_required}
          value={field_value}
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
