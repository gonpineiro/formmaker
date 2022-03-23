import Select from "react-select";

import React, { useContext, useEffect, useState } from "react";

import { FormContext } from "../../screens/FormContext";
import { asteriscos } from "../../utils";
import { DEFAULT_LABEL_COLOR } from "../../config/config";

const SelectSearch = ({
  field_id,
  field_name,
  field_label,
  field_required,
  field_placeholder,
  field_options,
}) => {
  const { handleChange } = useContext(FormContext);
  const isRequired = field_required === "true";
  const [options, setPptions] = useState([]);

  useEffect(() => {
    if (field_options.length > 0) {
      const options = field_options.map((op) => ({
        value: op.option_label,
        label: op.option_label,
      }));
      setPptions(options);
    }
  }, [field_options]);

  const selectChange = ({ value }) => {
    const event = { target: { value } };
    event.target.value = value;
    handleChange(field_id, event);
  };

  return (
    <>
      <div className="mb-3">
        <div className="card">
          <div className="card-body">
            <label
              className="form-label"
              style={{ color: DEFAULT_LABEL_COLOR }}
            >
              {field_label}
              {asteriscos(field_required)}
            </label>

            <Select
              options={options}
              aria-label="Default select example"
              id={"id" + field_id}
              name={field_name}
              required={isRequired && "required"}
              onChange={selectChange}
              on
            />

            <div className="invalid-feedback">No seleccionó ninguna opción</div>
            <div className="valid-feedback">¡Se ve bien!</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectSearch;
