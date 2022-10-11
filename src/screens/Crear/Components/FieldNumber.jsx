import { useState } from "react";

import { BasicButton, BasicCheckbox, BasicInput } from "../../../components";

import { getOrderId } from "../../../utils";

const initialState = {
  field_required: true,
  field_type: "number",
};

const FieldNumber = ({ formulario, setFormulario, callapseOrden }) => {
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

  const handlerPlaceholderChange = ({ target: { value } }) => {
    setField({
      ...field,
      field_placeholder: value,
    });
  };

  const handlerRequiredChange = () => {
    setField({
      ...field,
      field_required: !field.field_required,
    });
  };

  const handlerMaxCharChange = ({ target: { value } }) => {
    setField({
      ...field,
      field_max: value,
    });
  };

  const handlerMinCharChange = ({ target: { value } }) => {
    setField({
      ...field,
      field_min: value,
    });
  };

  const handlerMaxValueChange = ({ target: { value } }) => {
    setField({
      ...field,
      field_maxValue: value,
    });
  };

  const handlerMinValueChange = ({ target: { value } }) => {
    setField({
      ...field,
      field_minValue: value,
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
          Número
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

          <BasicInput
            label="Placeholder"
            id={"placeholder_field_label"}
            type="text"
            value={field.field_placeholder || ""}
            handlerChange={handlerPlaceholderChange}
            placeholder="Ej: Nombre mascota, escriba su email, descripción de su vivienda"
          />
          <BasicInput
            label="Longitud Mínima"
            id={"min_number_field_label"}
            type="number"
            value={field.field_min || ""}
            handlerChange={handlerMinCharChange}
            placeholder="Ej: 1"
          />
          <BasicInput
            label="Longitud Máxima"
            id={"max_number_field_label"}
            type="number"
            value={field.field_max || ""}
            handlerChange={handlerMaxCharChange}
            placeholder="Ej: 8"
          />
          <BasicInput
            label="Valor Mínimo Aceptado"
            id={"min_number_field_label"}
            type="number"
            value={field.field_minValue || ""}
            handlerChange={handlerMinValueChange}
            placeholder="Ej: 5"
          />
          <BasicInput
            label="Valor Máximo Aceptado"
            id={"max_number_field_label"}
            type="number"
            value={field.field_maxValue || ""}
            handlerChange={handlerMaxValueChange}
            placeholder="Ej: 85"
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

export default FieldNumber;
