import { useState } from "react";

const initialState = {
  field_required: true,
  field_type: "number",
};

const FieldNumber = ({ formulario, setFormulario, callapseOrden }) => {
  const [field, setField] = useState(initialState);

  const handlerSubmit = () => {
    let inputs = formulario.fields;
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
      max_lenght: value,
    });
  };

  const handlerMinCharChange = ({ target: { value } }) => {
    setField({
      ...field,
      min_lenght: value,
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
          Number
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
            <label htmlFor="number_field_label" className="form-label">
              Etiqueta
            </label>
            <input
              type="text"
              className="form-control"
              id="number_field_label"
              value={field.field_label || ""}
              placeholder="Ej: Número de mascotas"
              onChange={handlerTextChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="min_number_field_label" className="form-label">
              Mínimo
            </label>
            <input
              type="number"
              className="form-control"
              id="min_number_field_label"
              value={field.min_lenght || ""}
              onChange={handlerMinCharChange}
              placeholder="Ej: 5"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="max_number_field_label" className="form-label">
              Máximo
            </label>
            <input
              type="number"
              className="form-control"
              id="max_number_field_label"
              value={field.max_lenght || ""}
              onChange={handlerMaxCharChange}
              placeholder="Ej: 50"
            />
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={field.field_required}
                onChange={handlerRequiredChange}
                id="number_field_required"
              />
              <label
                className="form-check-label"
                htmlFor="number_field_required"
              >
                ¿Es un campo requerido?
              </label>
            </div>
          </div>
          <div className="col-auto">
            <button
              id="addNumber"
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

export default FieldNumber;
