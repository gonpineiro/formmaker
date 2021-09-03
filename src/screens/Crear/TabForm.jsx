const TabForm = () => {
  return (
    <>
      <h4 className="mb-">Elegir Campos</h4>
      <div class="accordion" id="accordionFieldType">
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
                  <option value="text" selected>
                    Texto
                  </option>
                  <option value="textarea">Párrafo</option>
                  <option value="email">Email</option>
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
                <button
                  id="addNumber"
                  type="submit"
                  class="btn btn-primary mb-3"
                >
                  Agregar campo
                </button>
              </div>
            </div>
          </div>
        </div>
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
                <button
                  id="addSelect"
                  type="submit"
                  class="btn btn-primary mb-3"
                >
                  Agregar campo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabForm;
