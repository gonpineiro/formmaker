import { useState } from "react";
import { BasicInput } from "../../../components";

const initialState = { field_type: "separator" };

const FieldSeparator = ({ formulario, setFormulario, callapseOrden }) => {
  const [field, setField] = useState(initialState);

  const handlerSubmit = () => {
    const fields = formulario.fields;
    fields.push(field);
    setFormulario({
      ...formulario,
    });

    setField(initialState);
  };

  const handlerTitleChange = ({ target: { value } }) => {
    setField({
      ...field,
      separator_title: value,
    });
  };

  const handlerDescriptionChange = ({ target: { value } }) => {
    setField({
      ...field,
      separator_description: value,
    });
  };

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={"heading" + callapseOrden}>
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#collapse" + callapseOrden}
          aria-expanded="true"
          aria-controls={"collapse" + callapseOrden}
        >
          Separador
        </button>
      </h2>
      <div
        id={"collapse" + callapseOrden}
        className="accordion-collapse collapse show"
        aria-labelledby={"heading" + callapseOrden}
        data-bs-parent="#accordionFieldType"
      >
        <div className="accordion-body">
          <BasicInput
            label="Titulo"
            id={"text_field_label"}
            type="text"
            value={field.separator_title || ""}
            handlerChange={handlerTitleChange}
            placeholder="Ej: Nombre mascota, escriba su email, descripción de su vivienda"
          />
          <div className="mb-3">
            <label htmlFor="separator_field_label" className="form-label">
              Descripción
            </label>
            <textarea
              type="text"
              className="form-control"
              id="separator_desciption_field_label"
              value={field.separator_description || ""}
              onChange={handlerDescriptionChange}
              placeholder="Ej: Nombre mascota, escriba su email, descripción de su vivienda"
            />
          </div>
          <div className="col-auto">
            <button
              id="addText"
              type="submit"
              onClick={handlerSubmit}
              disabled={field.separator_title ? false : true}
              className="btn btn-primary mb-3"
            >
              Agregar Separador
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldSeparator;
