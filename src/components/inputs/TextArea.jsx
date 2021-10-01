import React, { useContext } from "react";
import { FormContext } from "../../screens/FormContext";
import { asteriscos } from "../../utils";

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
  
  const [count, setCount] = React.useState(0);
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
            onChange={(event) => handleChange(field_id, event)}
            onKeyUp={(e) => setCount(e.target.value.length)}
            required={field_required}
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
