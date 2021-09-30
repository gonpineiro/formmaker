import { useState } from "react";

const initialState = {
  field_required: true,
  field_type: "text",
};

const FieldText = ({ formulario, setFormulario, callapseOrden }) => {
  const [field, setField] = useState(initialState);

  const handlerSubmit = () => {
    const inputs = formulario.fields;
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
      field_placeholder: value,
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
  const handlerTypeChange = ({ target: { value } }) => {
    if (value === "email") {
      setField({
        ...field,
        field_type: value,
        field_min: 0,
        field_max: 999,
      });
    } else {
      setField({
        ...field,
        field_type: value,
      });
    }
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
          Texto
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
            <label htmlFor="text_field_label" className="form-label">
              Etiqueta
            </label>
            <input
              type="text"
              className="form-control"
              id="text_field_label"
              value={field.field_label || ""}
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
              value={field.field_type}
            >
              <option value="text">Texto</option>
              <option value="textarea">Párrafo</option>
              <option value="email">Email</option>
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
              value={field.field_min || ""}
              onChange={handlerMinCharChange}
              placeholder="Ej: 5"
              disabled={field.field_type === "email"}
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
              value={field.field_max || ""}
              onChange={handlerMaxCharChange}
              placeholder="Ej: 50"
              disabled={field.field_type === "email"}
            />
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={field.field_required}
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

export default FieldText;
