import React, { useContext } from "react";
import { FormContext } from "../../screens/FormContext";

const Input = ({
  field_id,
  field_label,
  field_placeholder,
  field_required,
  field_value,
}) => {
  const { handleChange } = useContext(FormContext);
  return (
    <div className="mb-3">
      <label htmlFor={"id" + field_id} className="form-label">
        {field_label}
      </label>
      <textarea
        type="text"
        className="form-control"
        id={"id" + field_id}
        aria-describedby={field_id + "Help"}
        placeholder={field_placeholder ? field_placeholder : ""}
        value={field_value}
        onChange={(event) => handleChange(field_id, event)}
        required={field_required}
      />
      <div id={field_id + "Help"} className="form-text">
        {field_placeholder} correctamente.
      </div>
    </div>
  );
};

export default Input;
