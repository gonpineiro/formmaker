import React from "react";

const FielSelect = () => {
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
              placeholder="Ej: casa; departamento; casa rodante;"
            ></textarea>
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                ¿Es requerido?
              </label>
            </div>
          </div>
          <div className="col-auto">
            <button id="addSelect" type="submit" className="btn btn-primary mb-3">
              Agregar campo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FielSelect;
