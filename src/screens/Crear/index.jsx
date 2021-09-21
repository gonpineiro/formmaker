import { insertForm } from "../../api";

import InfoCards from "./InfoCards";
import {
  FieldText,
  FieldNumber,
  FieldSelect,
  FieldSeparator,
} from "./Components";

import "./index.scss";

import { useState } from "react";
import { BasicInput } from "../../components";

const initialState = {
  banner: 'banner',
  description: "Esto es una descripcion",
  input: [],
};

const Crear = () => {
  const [formulario, setFormulario] = useState(initialState);

  const handlerNameChange = ({ target: { value } }) => {
    setFormulario({
      ...formulario,
      name: value,
    });
  };

  const handlerColorChange = ({ target: { value } }) => {
    setFormulario({
      ...formulario,
      hcolor: value,
    });
  };

  const handlerTermYCondChange = ({ target: { value } }) => {
    setFormulario({
      ...formulario,
      terminosCondiciones: value,
    });
  };

  const ButtonsSubmit = () => {
    const handlerSubmitForm = () => {
      insertForm(formulario);
    };

    if (formulario.input.length === 0) return "";

    return (
      <div className="col-auto">
        <button
          id="addSelect"
          type="submit"
          onClick={handlerSubmitForm}
          className="btn btn-primary mb-3"
        >
          Agregar Formulario
        </button>
        <button id="addSelect" type="submit" className="btn btn-primary mb-3">
          Previsualizar
        </button>
      </div>
    );
  };

  return (
    <div className="container mb-5">
      <div className="row mt-5">
        <div className="col-12 col-md-6">
          <h4 className="mb-3">Elegir Campos</h4>
          <div className="accordion" id="accordionFieldType">
            <FieldSeparator
              formulario={formulario}
              setFormulario={setFormulario}
              callapseOrden={"FieldSeparator"}
            />
            <FieldText
              formulario={formulario}
              setFormulario={setFormulario}
              callapseOrden={"FieldText"}
            />
            <FieldNumber
              formulario={formulario}
              setFormulario={setFormulario}
              callapseOrden={"FieldNumber"}
            />
            <FieldSelect
              formulario={formulario}
              setFormulario={setFormulario}
              callapseOrden={"FieldSelect"}
            />
          </div>
          <h4 className="mb-3 mt-3">Detalle Formulario</h4>
          <BasicInput
            label="Nombre"
            id="nombre"
            type="text"
            placeholder="Furmulario algo"
            value={formulario.name}
            handlerChange={handlerNameChange}
          />
          <BasicInput
            label="Color"
            id="hcolor"
            type="color"
            value={formulario.hcolor}
            handlerChange={handlerColorChange}
          />
          <BasicInput
            label="Términos y condiciones"
            id="termCondi"
            type="text"
            value={formulario.terminosCondiciones}
            handlerChange={handlerTermYCondChange}
          />
        </div>
        <div className="col-12 col-md-6">
          <InfoCards formulario={formulario} setFormulario={setFormulario} />
          <ButtonsSubmit />
        </div>
      </div>
    </div>
  );
};

export default Crear;
