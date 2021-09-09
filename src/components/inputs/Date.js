import React, { useContext } from "react";
import { FormContext } from "../../screens/FormContext";

const Date = ({
  field_id,
  field_label,
  field_placeholder,
  field_required,
  field_value,
}) => {
  const { handleChange } = useContext(FormContext);
  return (
    <div className="col-12 col-md-4 mb-3">
      <div className="card">
        <div className="card-body">
          <label htmlFor={"id" + field_id} className="form-label">
            {field_label}
          </label>
          <input
            type="date"
            className="form-control"
            id={"id" + field_id}
            onChange={(event) => handleChange(field_id, event)}
            required={field_required}
            value={field_value}
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

export default Date;
