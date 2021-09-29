import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
/* mongoDb */
/* import { insertForm } from "../../api"; */

import {
  FieldText,
  FieldNumber,
  FieldSelect,
  FieldSeparator,
  FieldRadio,
  FieldCheckbox,
} from "./Components";

import { BasicInput, Loading } from "../../components";
import InfoCards from "./InfoCards";
import { postForm } from "../../utils/";

import "./index.scss";

const Crear = () => {
  const initialState = {
    nombre: null,
    description: null,
    hcolor: "#266AAD",
    terminosCondiciones: null,
    fields: [],
    banner: null,
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

  const handlerDescriptionChange = ({ target: { value } }) => {
    setFormulario({
      ...formulario,
      description: value,
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

  const handlerBannerChange = ({ target }) => {
    const files = target.files;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files[0]);

    fileReader.onload = ({ target: { result } }) => {
      setFormulario({
        ...formulario,
        banner: result,
      });
    };
  };

  const ButtonsSubmit = () => {
    if (
      !formulario.nombre ||
      !formulario.description ||
      !formulario.terminosCondiciones
    ) {
      return "";
    }

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
                  label="Descripción"
                  id="description"
                  type="text"
                  placeholder="Furmulario algo"
                  value={formulario.description}
                  handlerChange={handlerDescriptionChange}
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
                <BasicInput
                  label="Banner"
                  id="banner"
                  type="file"
                  handlerChange={handlerBannerChange}
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
