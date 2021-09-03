import React from "react";

const FieldNumber = () => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Number
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
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
              placeholder="Ej: Número de mascotas"
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
              placeholder="Ej: 50"
            />
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="number_field_required"
              />
              <label className="form-check-label" htmlFor="number_field_required">
                ¿Es requerido?
              </label>
            </div>
          </div>
          <div className="col-auto">
            <button id="addNumber" type="submit" className="btn btn-primary mb-3">
              Agregar campo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldNumber;
