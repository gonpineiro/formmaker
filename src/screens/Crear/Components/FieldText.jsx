import { useState } from "react";

const FieldText = ({ formulario, setFormulario }) => {
  const [field, setField] = useState({ required: true, type: "type_text" });

  const handlerSubmit = () => {
    let inputs = formulario.input;
    inputs.push(field);
    setFormulario({
      ...formulario,
    });
  };

  const handlerTextChange = ({ target: { value } }) => {
    setField({
      ...field,
      textField: value,
    });
  };

  const handlerRequiredChange = () => {
    setField({
      ...field,
      required: !field.required,
    });
  };
  const handlerTypeChange = ({ target: { value } }) => {
    setField({
      ...field,
      type: value,
    });
  };

  const handlerMaxCharChange = ({ target: { value } }) => {
    setField({
      ...field,
      max: value,
    });
  };

  const handlerMinCharChange = ({ target: { value } }) => {
    setField({
      ...field,
      min: value,
    });
  };

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Texto
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionFieldType"
      >
        <div className="accordion-body">
          <div className="mb-3">
            <label htmlFor="text_field_label" className="form-label">
              Etiqueta
            </label>
            <input
              type="text"
              className="form-control"
              id="text_field_label"
              onChange={handlerTextChange}
              placeholder="Ej: Nombre mascota, escriba su email, descripción de su vivienda"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="text_field_type" className="form-label">
              Elegir tipo
            </label>
            <select
              id="text_field_type"
              className="form-select"
              aria-label="Default select example"
              onChange={handlerTypeChange}
              value={field.type}
            >
              <option value="type_text">Texto</option>
              <option value="type_textarea">Párrafo</option>
              <option value="type_email">Email</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="min_text_field_type" className="form-label">
              Mínimo caracteres
            </label>
            <input
              type="number"
              className="form-control"
              id="min_text_field_type"
              onChange={handlerMinCharChange}
              placeholder="Ej: 5"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="max_text_field_type" className="form-label">
              Máximo caracteres
            </label>
            <input
              type="number"
              className="form-control"
              id="max_text_field_type"
              onChange={handlerMaxCharChange}
              placeholder="Ej: 50"
            />
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={field.required}
                onChange={handlerRequiredChange}
                id="text_field_required"
              />
              <label className="form-check-label" htmlFor="text_field_required">
                ¿Es un campo requerido?
              </label>
            </div>
          </div>
          <div className="col-auto">
            <button
              id="addText"
              type="submit"
              onClick={handlerSubmit}
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

export default FieldText;
