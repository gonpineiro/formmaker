import React from "react";

const FieldText = () => {
  return (
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button
          class="accordion-button"
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
        class="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionFieldType"
      >
        <div class="accordion-body">
          <div class="mb-3">
            <label for="text_field_label" class="form-label">
              Etiqueta
            </label>
            <input
              type="text"
              class="form-control"
              id="text_field_label"
              placeholder="Ej: Nombre mascota, escriba su email, descripción de su vivienda"
            />
          </div>
          <div class="mb-3">
            <label for="text_field_type" class="form-label">
              Elegir tipo
            </label>
            <select
              id="text_field_type"
              class="form-select"
              aria-label="Default select example"
            >
              <option value="type_text" selected>
                Texto
              </option>
              <option value="type_textarea">Párrafo</option>
              <option value="type_email">Email</option>
            </select>
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="text_field_required"
              />
              <label class="form-check-label" for="text_field_required">
                ¿Es un campo requerido?
              </label>
            </div>
          </div>
          <div class="col-auto">
            <button id="addText" type="submit" class="btn btn-primary mb-3">
              Agregar campo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldText;
