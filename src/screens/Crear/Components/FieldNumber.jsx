import { useState } from "react";
import { BasicCheckbox, BasicInput } from "../../../components";
import { getOrderId } from "../../../utils";

const initialState = {
  field_required: true,
  field_type: "number",
};

const FieldNumber = ({ formulario, setFormulario, callapseOrden }) => {
  const [field, setField] = useState(initialState);

  const handlerSubmit = () => {
    let inputs = formulario.fields;
    field.order = getOrderId(inputs);

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
            label="Mínimo"
            id={"min_number_field_label"}
            type="number"
            value={field.field_min || ""}
            handlerChange={handlerMinCharChange}
            placeholder="Ej: 5"
          />
          <BasicInput
            label="Máximo"
            id={"max_number_field_label"}
            type="number"
            value={field.field_max || ""}
            handlerChange={handlerMaxCharChange}
            placeholder="Ej: 5"
          />          
          <BasicCheckbox
            label="¿Es un campo requerido?"
            checked={field.field_required}
            handlerChange={handlerRequiredChange}
            id="number_field_required"
          />
          <div className="col-auto">
            <button
              id="addNumber"
              type="submit"
              onClick={handlerSubmit}
              disabled={field.field_label ? false : true}
              className="btn btn-primary mb-3"
            >
              Agregar campo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldNumber;
