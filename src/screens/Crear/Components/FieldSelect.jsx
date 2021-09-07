import { useState } from "react";

const FieldSelect = ({ formulario, setFormulario }) => {
  const [field, setField] = useState({ required: true });

  const handlerSubmit = () => {
    let inputs = formulario.input;
    inputs.opciones.split(';')
    inputs.push(field);
    setFormulario({
      ...formulario,
    });
  };

  const handlerTextChange = ({ target: { value } }) => {
    setField({
      ...field,
      label: value,
      placeholder: value,
      descipcionSelect: value,
    });
  };

  const handlerOptionChange = ({ target: { value } }) => {
    setField({
      ...field,
      opciones: value,
    });
  };

  const handlerRequiredChange = () => {
    setField({
      ...field,
      required: !field.required,
    });
  };

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Select
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionFieldType"
      >
        <div className="accordion-body">
          <div className="mb-3">
            <label htmlFor="select_field_label" className="form-label">
              Etiqueta
            </label>
            <input
              type="text"
              className="form-control"
              id="select_field_label"
              onChange={handlerTextChange}
              placeholder="Ej: Selecciones su tipo de vivienda"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="select_field_options" className="form-label">
              Escriba las opciones separadas por ;
            </label>
            <textarea
              className="form-control"
              id="select_field_options"
              rows="3"
              onChange={handlerOptionChange}
              placeholder="Ej: casa; departamento; casa rodante;"
            ></textarea>
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={field.required}
                onChange={handlerRequiredChange}
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                ¿Es un campo requerido?
              </label>
            </div>
          </div>
          <div className="col-auto">
            <button
              id="addSelect"
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

export default FieldSelect;
