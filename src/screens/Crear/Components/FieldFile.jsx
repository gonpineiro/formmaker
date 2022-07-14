import { useState } from "react";
import { BasicInput, BasicCheckbox, BasicButton } from "../../../components";
import { getOrderId } from "../../../utils";

const initialState = {
  field_required: true,
  field_type: "file",
  field_accept: []
};
/*const objetito = {
  field_required: true,
  field_type: "file",
  field_accept: []
};*/

const FieldFile = ({ formulario, setFormulario, callapseOrden }) => {
  const [field, setField] = useState(initialState);

  //const [isChecked, setIsChecked] = useState(objetito);

  const handlerSubmit = () => {
    const inputs = formulario.fields;
    field.field_order = getOrderId(inputs);

    inputs.push(field);
    setFormulario({
      ...formulario,
    });

    setField(initialState); 
    //resetearChecks();
  };

  /*const resetearChecks = () => {
    document.getElementById(".jpg, .jpeg,").checked = false;
    document.getElementById(".png,").checked = false;
    document.getElementById(".bmp,").checked = false;
    document.getElementById(".pdf,").checked = false;
    //document.getElementsByName("extensionesPermitidas").checked = false;
  };*/

  const handlerTextChange = ({ target: { value } }) => {
    setField({
      ...field,
      field_label: value,
      field_name: value,
      field_id: value,
      field_value: "",
    });
  };

  const handlerToggleFileType = ({ target: { id } }) => {
    setField({
      ...field,
      field_accept: (field.field_accept.includes(id) ? field.field_accept.filter(filetype => filetype !== id) : [...field.field_accept, id] )
    });
  };

  /*const handlerIsChecked = ( id ) => {
    console.log("hola: ");
      return field.field_accept.includes(id);
  };*/

  //console.log("algo: " + JSON.stringify(field));

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
          Archivo
        </button>
      </h2>
      <div
        id={"collapse" + callapseOrden}
        className="accordion-collapse collapse"
        aria-labelledby={"heading" + callapseOrden}
        data-bs-parent="#accordionFieldType"
      >
        <div className="accordion-body">
          <BasicInput
            label="Etiqueta"
            id={"text_field_label"}
            type="text"
            value={field.field_label || ""}
            handlerChange={handlerTextChange}
            placeholder="Ej: Fotocopia DNI"
          />

          {/* <span className="d-flex">
            <BasicButton
              label="Imagen"
              id={"button_image"}
              classname="btn btn-primary col-5 mx-auto mb-3"
              handlerClick={handlerTipoImagen}
              value={true}
            />
            <span className="col-1 mx-auto"></span>
            <BasicButton
              label="Archivo"
              id={"button_file"}
              classname="btn btn-primary col-5 mx-auto mb-3"
              handlerClick={handlerTipoArchivo}
              value={false}
            />
          </span> */}
          <p>Extensiones permitidas</p>
          {
            <span className="col-12 row">
              <span className="col-3">
                <BasicCheckbox
                  label={"JPG"}
                  //id={".jpg .jpeg"}
                  //checked={() => handlerIsChecked(".jpg, .jpeg,")}
                  checked={field.field_accept.includes(".jpg, .jpeg,") ? true : false}
                  id={".jpg, .jpeg,"}
                  handlerChange={handlerToggleFileType}
                />
              </span>
              <span className="col-3">
                <BasicCheckbox
                  label={"PNG"}
                  id={".png,"}
                  checked={field.field_accept.includes(".png,") ? true : false}
                  handlerChange={handlerToggleFileType}
                /></span>
              <span className="col-3">
                <BasicCheckbox
                  label={"BPM"}
                  id={".bmp,"}
                  checked={field.field_accept.includes(".bmp,") ? true : false}
                  handlerChange={handlerToggleFileType}
                />
              </span>
              <span className="col-3">
                <BasicCheckbox
                  label={"PDF"}
                  id={".pdf,"}
                  checked={field.field_accept.includes(".pdf,") ? true : false}
                  handlerChange={handlerToggleFileType}
                />
              </span>
            </span>
          }

          <hr className="mt-1"></hr>

          <BasicCheckbox
            label="¿Es un campo requerido?"
            checked={field.field_required}
            handlerChange={handlerRequiredChange}
            id="text_field_required"
          />
          <BasicButton
            label="Agregar campo"
            handlerClick={handlerSubmit}
            classname="btn btn-primary mb-3"
            disabled={field.field_label ? false : true}
          />
        </div>
      </div>
    </div>
  );
};

export default FieldFile;
