import React from "react";

const FielSelect = () => {
  return (
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingThree">
        <button
          class="accordion-button collapsed"
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
        class="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionFieldType"
      >
        <div class="accordion-body">
          <div class="mb-3">
            <label for="select_field_label" class="form-label">
              Etiqueta
            </label>
            <input
              type="text"
              class="form-control"
              id="select_field_label"
              placeholder="Ej: Selecciones su tipo de vivienda"
            />
          </div>
          <div class="mb-3">
            <label for="select_field_options" class="form-label">
              Escriba las opciones separadas por ;
            </label>
            <textarea
              class="form-control"
              id="select_field_options"
              rows="3"
              placeholder="Ej: casa; departamento; casa rodante;"
            ></textarea>
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                ¿Es requerido?
              </label>
            </div>
          </div>
          <div class="col-auto">
            <button id="addSelect" type="submit" class="btn btn-primary mb-3">
              Agregar campo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FielSelect;
