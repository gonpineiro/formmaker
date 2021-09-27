import React, { useContext } from "react";
import { FormContext } from "../../screens/FormContext";

const Input = ({
  field_id,
  field_name,
  field_class,
  field_label,
  field_placeholder,
  field_required,
  field_value,
  field_min,
  field_max,
  field_type,
}) => {
  const { handleChange } = useContext(FormContext);
  const astericos = () => {
    if (field_required === "true") {
      return <span className="text-danger fw-bold"> *</span>;
    }
  };
  const isRequired = field_required === "true";
  return (
    <div className="mb-3">
      <div className="card">
        <div className="card-body">
          <label
            htmlFor={"id" + field_id}
            className="form-label"
            style={{ color: "#143c75" }}
          >
            {field_label}
            {astericos()}
          </label>
          <input
            type={field_type}
            className={"form-control"}
            id={"id" + field_id}
            name={field_name}
            aria-describedby={field_id + "Help"}
            placeholder={field_placeholder ? field_placeholder : ""}
            value={field_value.slice(0, field_max)}
            onChange={(event) => handleChange(field_id, event)}
            required={isRequired && "required"}
            minLength={field_min}
            maxLength={field_max}
          />
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
