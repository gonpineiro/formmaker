import React, { useContext } from "react";

import { asteriscos } from "../../utils";
import { FormContext } from "../../screens/FormContext";
import { DEFAULT_LABEL_COLOR } from "../../config/config";

const Input = ({
  field_id,
  field_name,
  field_label,
  field_placeholder,
  field_required,
  field_value,
  field_max,
  field_min,
  field_maxValue,
  field_minValue,
  field_type,
  field_accept,
}) => {
  const { handleChange } = useContext(FormContext);
  const isRequired = field_required === "true";

  const handleInputChange = (event) => {
    handleChange(field_id, event);
  };
  /*console.log("que llego? "+ JSON.stringify(field_required));
  console.log("Es true? "+ (field_required == true));
  console.log("Es true 2? "+ (field_required === true));
  console.log("Es true 3? "+ (field_required == "true"));
  console.log("Es true 4? "+ (field_required === "true"));*/

  //field_accept = (field_accept != undefined ? field_accept.join(" ") : '')

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
          <input
            type={field_type}
            className={"form-control"}
            id={"id" + field_id}
            name={field_name}
            aria-describedby={field_id + "Help"}
            placeholder={field_placeholder ? field_placeholder : ""}
            value={field_value.slice(0, field_max)}
            onChange={handleInputChange}
            required={isRequired && "required"}
            minLength={field_min}
            maxLength={field_max}
            //esto es por el input number, para agregar valores maximos y minimos
            min={field_minValue}
            max={field_maxValue}
            accept={(field_accept != undefined ? field_accept.join(" ") : '')}
          />
          <div className="invalid-feedback">
            {/* {field_type !== "file" ? field_placeholder+' correctamente' : 'Debe adjuntar un archivo'}. */}
            {(field_type === "file" ? 'Debe adjuntar un archivo' : (field_placeholder != undefined ? field_placeholder + " correctamente" : "El valor del campo " + field_name + " no es válido."))}
          </div>
          <div className="valid-feedback">¡Se ve bien!</div>
        </div>
      </div>
    </div>
  );
};

export default Input;
