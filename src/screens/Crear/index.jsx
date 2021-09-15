import InfoCards from "./InfoCards";
import {
  FieldText,
  FieldNumber,
  FieldSelect,
  FieldSeparator,
} from "./Components";

import "./index.scss";

import { useState } from "react";

const Crear = () => {
  const [formulario, setFormulario] = useState({ input: [] });
  return (
    <div className="container mb-5">
      <h2 className="titulo">Crear</h2>
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
        </div>
        <div className="col-12 col-md-6">
          <InfoCards />
        </div>
      </div>
    </div>
  );
};

export default Crear;
