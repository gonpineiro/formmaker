import React, { useContext } from "react";
import { FormContext } from "../../screens/FormContext";

const Date = ({
  field_id,
  field_name,
  field_label,
  field_placeholder,
  field_required,
  field_value,
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
          <div className="col-6">
            <label
              htmlFor={"id" + field_id}
              className="form-label"
              style={{ color: "#143c75" }}
            >
              {field_label}
              {astericos()}
            </label>
            <input
              type="date"
              className="form-control"
              id={"id" + field_id}
              name={field_name}
              onChange={(event) => handleChange(field_id, event)}
              required={isRequired && "required"}
              value={field_value}
            />
            <div className="invalid-feedback">
              {field_placeholder} correctamente.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Date;
