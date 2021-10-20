import { useState } from "react";

import { BasicButton, BasicCheckbox, BasicInput } from "../../../components";

import { getOrderId } from "../../../utils";

const initialState = {
  field_required: true,
  field_type: "date",
};

const FieldDate = ({ formulario, setFormulario, callapseOrden }) => {
  const [field, setField] = useState(initialState);

  const handlerSubmit = () => {
    let inputs = formulario.fields;
    field.field_order = getOrderId(inputs);

    inputs.push(field);
    setFormulario({
      ...formulario,
    });

    setField(initialState);
  };

  const handlerTextChange = ({ target: { value } }) => {
    setField({
      ...field,
      field_label: value,
      field_name: value,
      field_id: value,
      field_value: "",
    });
  };

  const handlerRequiredChange = () => {
    setField({
      ...field,
      field_required: !field.field_required,
    });
  };

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={"heading" + callapseOrden}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#collapse" + callapseOrden}
          aria-expanded="false"
          aria-controls={"collapse" + callapseOrden}
        >
          Fecha
        </button>
      </h2>
      <div
        id={"collapse" + callapseOrden}
        className="accordion-collapse collapse"
        aria-labelledby={"heading" + callapseOrden}
        data-bs-parent="#accordionFieldType"
      >
        <div className="accordion-body">
          <BasicInput
            label="Etiqueta"
            id={"text_field_label"}
            type="text"
            value={field.field_label || ""}
            handlerChange={handlerTextChange}
            placeholder="Ej: Número de mascotas"
          />
          <BasicCheckbox
            label="¿Es un campo requerido?"
            checked={field.field_required}
            handlerChange={handlerRequiredChange}
            id="number_field_required"
          />
          <BasicButton
            label="Agregar campo"
            handlerClick={handlerSubmit}
            classname="btn btn-primary mb-3"
            disabled={field.field_label ? false : true}
          />
        </div>
      </div>
    </div>
  );
};

export default FieldDate;
