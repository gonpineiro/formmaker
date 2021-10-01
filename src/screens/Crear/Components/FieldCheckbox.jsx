import { useState } from "react";
import { BasicInput, BasicTextarea, BasicCheckbox } from "../../../components";

const initialState = { field_required: true, field_type: "checkboxes" };

const FieldCheckbox = ({ formulario, setFormulario, callapseOrden }) => {
  const [field, setField] = useState(initialState);
  const [disabledSubmit, setDisabledSubmit] = useState(true);

  const formatField = () => {
    let checkField = field;
    let options = checkField.field_options.split(";");

    options = options.filter((item) => item !== "");

    let field_options = [];

    options.forEach((option) =>
      field_options.push({
        option_label: option,
      })
    );

    return {
      ...checkField,
      field_options,
    };
  };

  const enableSubmit = (value) => {
    let opciones = value.split(";");
    opciones = opciones.filter((item) => item !== "");

    if (opciones.length === 0) {
      setDisabledSubmit(true);
    } else {
      setDisabledSubmit(false);
    }
  };

  const handlerSubmit = () => {
    const fields = formulario.fields;

    fields.push(formatField());

    setFormulario({
      ...formulario,
    });

    setField(initialState);
    setDisabledSubmit(true);
  };

  const handlerTextChange = ({ target: { value } }) => {
    setField({
      ...field,
      field_label: value,
      field_placeholder: value,
      field_name: value,
      field_id: value,
      field_value: "",
    });
  };

  const handlerOptionChange = ({ target: { value } }) => {
    enableSubmit(value);
    setField({
      ...field,
      field_options: value,
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
          Selección Múltiple
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
            placeholder="Ej: Selecciones su tipo de vivienda"
          />
          <BasicTextarea
            label="Escriba las opciones separadas por ;"
            type="text"
            id="checkbox_field_options"
            rows="3"
            value={field.field_options || ""}
            handlerChange={handlerOptionChange}
            placeholder="Ej: casa; departamento; casa rodante;"
          />
          <BasicCheckbox
            label="¿Es un campo requerido?"
            checked={field.field_required}
            handlerChange={handlerRequiredChange}
            id="checkbox_field_required"
          />
          <div className="col-auto">
            <button
              id="addSelect"
              type="submit"
              onClick={handlerSubmit}
              disabled={disabledSubmit}
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

export default FieldCheckbox;
