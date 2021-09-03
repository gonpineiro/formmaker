import { useState } from "react";

const TabForm = () => {
  const [field, setField] = useState({ required: true, type: "text" });

  const handlerTextFieldChange = ({ target: { value } }) => {
    setField({
      ...field,
      textField: value,
    });
  };

  const handlerRequiredFieldChange = () => {
    setField({
      ...field,
      required: !field.required,
    });
  };
  const handlerTypeFieldChange = ({ target: { value, id } }) => {
    if (id === "text_field_radio_email" && value === "on") {
      setField({
        ...field,
        type: "email",
      });
    }
    if (id === "text_field_radio_text" && value === "on") {
      setField({
        ...field,
        type: "text",
      });
    }
    if (id === "text_field_radio_paragraph" && value === "on") {
      setField({
        ...field,
        type: "paragraph",
      });
    }
  };

  console.log(field);
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Agregar campo de texto</h5>

        <div className="form-group">
          <label htmlFor="text_field">Nombre del campo</label>
          <input
            type="text"
            className="form-control"
            id="text_field"
            placeholder="Ingrese el nombre del campo"
            onChange={handlerTextFieldChange}
          />
        </div>

        <label>Seleccione el tipo</label>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="text_field_type"
            checked={field.type === "email"}
            onChange={handlerTypeFieldChange}
            id="text_field_radio_email"
          />
          <label className="form-check-label" htmlFor="text_field_radio_email">
            Correo electronico
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="text_field_type"
            checked={field.type === "text"}
            onChange={handlerTypeFieldChange}
            id="text_field_radio_text"
          />
          <label className="form-check-label" htmlFor="text_field_radio_text">
            Texto
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="text_field_type"
            checked={field.type === "paragraph"}
            onChange={handlerTypeFieldChange}
            id="text_field_radio_paragraph"
          />
          <label
            className="form-check-label"
            htmlFor="text_field_radio_paragraph"
          >
            Parrafo
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="text_field_required"
            name="text_field_required"
            checked={field.required}
            onChange={handlerRequiredFieldChange}
          />
          <label className="form-check-label" htmlFor="text_field_required">
            Requerido
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </div>
    </div>
  );
};

export default TabForm;
