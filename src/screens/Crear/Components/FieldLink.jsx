import { useState } from "react";

import { BasicButton, BasicInput, BasicTextarea } from "../../../components";

import { getOrderId } from "../../../utils";

const initialState = { field_type: "link" };

const FieldLink = ({ formulario, setFormulario, callapseOrden }) => {
  const [field, setField] = useState(initialState);

  const handlerSubmit = () => {
    const fields = formulario.fields;
    field.field_order = getOrderId(fields);

    fields.push(field);
    setFormulario({
      ...formulario,
    });

    setField(initialState);
  };

  const handlerTitleChange = ({ target: { value } }) => {
    setField({
      ...field,
      link_title: value,
    });
  };

  const handlerDescriptionChange = ({ target: { value } }) => {
    setField({
      ...field,
      url: value,
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
          aria-expanded="true"
          aria-controls={"collapse" + callapseOrden}
        >
          Link
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
            label="Titulo"
            id={"text_field_label"}
            type="text"
            value={field.link_title || ""}
            handlerChange={handlerTitleChange}
            placeholder="Ej: Nombre mascota, escriba su email, descripción de su vivienda"
          />
          <BasicTextarea
            label="Descripción"
            type="text"
            id="link_desciption_field_label"
            value={field.url || ""}
            handlerChange={handlerDescriptionChange}
            placeholder="Ej: Nombre mascota, escriba su email, descripción de su vivienda"
          />
          <BasicButton
            label="Agregar campo"
            handlerClick={handlerSubmit}
            classname="btn btn-primary mb-3"
            disabled={field.link_title ? false : true}
          />
        </div>
      </div>
    </div>
  );
};

export default FieldLink;
