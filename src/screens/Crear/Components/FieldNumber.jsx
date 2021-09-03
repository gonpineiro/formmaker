import React from "react";

const FieldNumber = () => {
  return (
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingTwo">
        <button
          class="accordion-button collapsed"
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
        class="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionFieldType"
      >
        <div class="accordion-body">
          <div class="mb-3">
            <label for="number_field_label" class="form-label">
              Etiqueta
            </label>
            <input
              type="text"
              class="form-control"
              id="number_field_label"
              placeholder="Ej: Número de mascotas"
            />
          </div>
          <div class="mb-3">
            <label for="min_number_field_label" class="form-label">
              Mínimo
            </label>
            <input
              type="number"
              class="form-control"
              id="min_number_field_label"
              placeholder="Ej: 5"
            />
          </div>
          <div class="mb-3">
            <label for="max_number_field_label" class="form-label">
              Máximo
            </label>
            <input
              type="number"
              class="form-control"
              id="max_number_field_label"
              placeholder="Ej: 50"
            />
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="number_field_required"
              />
              <label class="form-check-label" for="number_field_required">
                ¿Es requerido?
              </label>
            </div>
          </div>
          <div class="col-auto">
            <button id="addNumber" type="submit" class="btn btn-primary mb-3">
              Agregar campo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldNumber;
