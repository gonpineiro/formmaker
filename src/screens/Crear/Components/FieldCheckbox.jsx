import { useState } from "react";

import {
  BasicInput,
  BasicTextarea,
  BasicCheckbox,
  BasicButton,
} from "../../../components";
import AlertMessage from "../../../components/Alert";

import { getOrderId } from "../../../utils";
import FieldDependant from "./FieldDependent";

const initialState = {
  field_required: true,
  field_type: "checkboxes",
  field_dependant: false,
  field_dependsOnField: -1,
  field_optionExpected: null,
};

const FieldCheckbox = ({ formulario, setFormulario, callapseOrden }) => {
  const [field, setField] = useState(initialState);
  const [disabledSubmit, setDisabledSubmit] = useState(false);
  const [cantSubmitMessage, setCantSubmitMessage] = useState('');

  const formatField = () => {
    let checkField = field;
    let options = checkField.field_options.split(";");

    options = options.filter((item) => item !== "");

    let field_options = [];

    options.forEach((option) =>
      field_options.push({
        option_label: option,
      })
    );

    return {
      ...checkField,
      field_options,
    };
  };

  // const enableSubmit = (value) => {
  //   let opciones = value.split(";");
  //   opciones = opciones.filter((item) => item !== "");

  //   if (opciones.length === 0) {
  //     setDisabledSubmit(true);
  //     setCantSubmitMessage("No escribió las opciones seleccionables")
  //   } else if ([null, undefined, ''].includes(field.field_id)) {
  //     setDisabledSubmit(true);
  //     setCantSubmitMessage("Indique un titulo para el campo")
  //   } else if ((field.field_dependant && field.field_dependsOnField != -1 && field.field_optionExpected == null)) {
  //     setDisabledSubmit(true);
  //     setCantSubmitMessage("No seleccionó una opción de dependencia")
  //   } else {
  //     setDisabledSubmit(false);
  //     setCantSubmitMessage('');
  //   }
  // };


  const puedeAgregarOpcion = () => {
    let puedeAgregarOpcion = false;
    if([null, undefined, [], ''].includes(field.field_options)){
      setCantSubmitMessage("Falta definir las opciones seleccionables")
    }else if (field.field_options.length === 0) {
      setCantSubmitMessage("Falta definir las opciones seleccionables")
    } else if ([null, undefined, ''].includes(field.field_id)) {
      setCantSubmitMessage("Falta definir el titulo para el campo")
    } else if ((field.field_dependant && field.field_dependsOnField != -1 && [null, undefined, ''].includes(field.field_optionExpected))) {
      setCantSubmitMessage("No seleccionó la opción de la cual depende para aparecer")
    } else {
      setDisabledSubmit(false);
      setCantSubmitMessage('');
      puedeAgregarOpcion = true;
    }

    return puedeAgregarOpcion;
  }

  const handlerSubmit = () => {
    // console.log(puedeAgregarOpcion());
    

    if (puedeAgregarOpcion()) {
      const fields = formulario.fields;
      field.field_order = getOrderId(fields);

      fields.push(formatField());

      setFormulario({
        ...formulario,
      });

      setField(initialState);
      // setDisabledSubmit(true);
    }
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
    puedeAgregarOpcion();
  };

  const handlerOptionChange = ({ target: { value } }) => {
    // enableSubmit(value);
    setField({
      ...field,
      field_options: value,
    });
    puedeAgregarOpcion();
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
          Selección Múltiple
        </button>
      </h2>
      <div
        id={"collapse" + callapseOrden}
        className="accordion-collapse collapse"
        aria-labelledby={"heading" + callapseOrden}
        data-bs-parent="#accordionFieldType"
      >
        <div className="accordion-body">
          {/* <div className="row">
            <FieldDependant formulario={formulario} setField={setField} field={field} id_dependant={"field_dependant_checkbox"} puedeAgregarOpcion={puedeAgregarOpcion}></FieldDependant>
          </div> */}
          <BasicInput
            label="Etiqueta"
            id={"text_field_label"}
            type="text"
            value={field.field_label || ""}
            handlerChange={handlerTextChange}
            placeholder="Ej: Selecciones su tipo de vivienda"
          />
          <BasicTextarea
            label="Escriba las opciones separadas por ;"
            type="text"
            id="checkbox_field_options"
            rows="3"
            value={field.field_options || ""}
            handlerChange={handlerOptionChange}
            placeholder="Ej: casa; departamento; casa rodante;"
          />
          <BasicCheckbox
            label="¿Es un campo requerido?"
            checked={field.field_required}
            handlerChange={handlerRequiredChange}
            id="checkbox_field_required"
          />
          <BasicButton
            label="Agregar campo"
            handlerClick={handlerSubmit}
            classname="btn btn-primary mb-3"
            disabled={disabledSubmit}
          />
          {
            cantSubmitMessage != '' ?
              <AlertMessage message={cantSubmitMessage} color={"danger"}></AlertMessage> : ''
          }
        </div>
      </div>
    </div>
  );
};

export default FieldCheckbox;
