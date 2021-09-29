import { Tab, Tabs } from "react-bootstrap";
/* mongoDb */
/* import { insertForm } from "../../api"; */

import InfoCards from "./InfoCards";
import {
  FieldText,
  FieldNumber,
  FieldSelect,
  FieldSeparator,
  FieldRadio,
  FieldCheckbox,
} from "./Components";

import "./index.scss";

import { useState } from "react";
import { BasicInput, Loading } from "../../components";
import { postForm } from "../../utils/";

const Crear = () => {
  const initialState = {
    nombre: null,
    description: "Esto es una descripcion",
    hcolor: "#FFF",
    banner: "banner",
    terminosCondiciones: null,
    fields: [],
  };
  const [formulario, setFormulario] = useState(initialState);
  const [keyTab, setKeyTab] = useState("campos");
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const handlerSubmitForm = () => {
    setLoadingSubmit(true);
    const fields = formulario.fields;
    fields.push({
      field_order: 33,
      field_id: "acepto",
      field_name: "acepto",
      field_label: "Completé mi formulario",
      field_type: "checkbox",
      field_value: "checked",
      field_required: "required",
    });

    setFormulario(formulario);
    postForm(formulario, "post-form-json").then(() => {
      setLoadingSubmit(false);
      setFormulario(initialState);
      setKeyTab("campos");
    });
    /* mongoDb */
    /* insertForm(formulario); */
  };

  const handlerNameChange = ({ target: { value } }) => {
    setFormulario({
      ...formulario,
      nombre: value,
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
    if (formulario.fields.length === 0) return "";

    return (
      <div className="d-flex justify-content-between">
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
            <FieldRadio
              formulario={formulario}
              setFormulario={setFormulario}
              callapseOrden={"FieldRadio"}
            />
            <FieldCheckbox
              formulario={formulario}
              setFormulario={setFormulario}
              callapseOrden={"FieldCheckbox"}
            />
          </div>
        </div>
        <div className="col-12 col-md-6">
          {!loadingSubmit ? (
            <Tabs
              defaultActiveKey={keyTab}
              onSelect={(k) => setKeyTab(k)}
              activeKey={keyTab}
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="campos" title="Campos Formulario" transition>
                <InfoCards
                  formulario={formulario}
                  setFormulario={setFormulario}
                />
              </Tab>
              <Tab
                eventKey="profile"
                title="Detalle del Formulario"
                disabled={formulario.fields.length === 0}
                transition
              >
                <BasicInput
                  label="Nombre"
                  id="nombre"
                  type="text"
                  placeholder="Furmulario algo"
                  value={formulario.nombre}
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
                <ButtonsSubmit />
              </Tab>
            </Tabs>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
};

export default Crear;
