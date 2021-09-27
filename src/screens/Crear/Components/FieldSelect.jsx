import { useState } from "react";

const initialState = { field_required: true, field_type: "select" };

const FieldSelect = ({ formulario, setFormulario, callapseOrden }) => {
  const [field, setField] = useState(initialState);
  const [disabledSubmit, setDisabledSubmit] = useState(true);

  const formatField = () => {
    let selectField = field;
    let field_options = selectField.field_options.split(";");

    field_options = field_options.filter((item) => item !== "");

    return {
      ...selectField,
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
      field_value: ""
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
          Select
        </button>
      </h2>
      <div
        id={"collapse" + callapseOrden}
        className="accordion-collapse collapse"
        aria-labelledby={"heading" + callapseOrden}
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
              value={field.field_label || ""}
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
              value={field.field_options || ""}
              onChange={handlerOptionChange}
              placeholder="Ej: casa; departamento; casa rodante;"
            ></textarea>
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={field.field_required}
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

export default FieldSelect;
