import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
/* mongoDb */
import { insertForm } from "../../api";

import {
  FieldText,
  FieldNumber,
  FieldSelect,
  FieldSeparator,
  FieldRadio,
  FieldCheckbox,
} from "./Components";

import { BasicInput, Loading, BasicButton } from "../../components";
import InfoCards from "./InfoCards";
import { postForm, orderToPost } from "../../utils/";

import "./index.scss";
import { Preview } from "../";
import { DEFAULT_COLOR, TYPE_FORM } from "../../config/config";

const Crear = () => {
  const initialState = {
    nombre: null,
    estado: "borrador",
    description: null,
    hcolor: DEFAULT_COLOR,
    terminosCondiciones: null,
    fields: [],
    banner: null,
  };

  const [formulario, setFormulario] = useState(initialState);
  const [keyTab, setKeyTab] = useState("detalle");
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [preview, setPreview] = useState(false);

  const handlerSubmitForm = () => {
    setLoadingSubmit(true);
    const fields = orderToPost(formulario.fields);

    fields.push({
      field_order: fields.length + 1,
      field_id: "acepto",
      field_name: "acepto",
      field_label: "Completé mi formulario",
      field_type: "checkbox",
      field_value: "checked",
      field_required: "required",
    });

    setFormulario(formulario);

    if (TYPE_FORM === "mongo") {
      insertForm(formulario).then(() => {
        setLoadingSubmit(false);
        setFormulario(initialState);
        setKeyTab("campos");
      });
    }

    if (TYPE_FORM === "json") {
      postForm(formulario, "post-form-json").then(() => {
        setLoadingSubmit(false);
        setFormulario(initialState);
        setKeyTab("campos");
      });
    }
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

  const handlerPreview = () => {
    setPreview(true);
  };

  const handlerChangeToAddFields = () => {
    setKeyTab("campos");
  };

  const ButtonsSubmit = () => {
    if (formulario.fields.length === 0) {
      return "";
    }

    return (
      <div className="d-flex justify-content-between">
        <BasicButton
          handlerClick={handlerSubmitForm}
          classname="btn btn-primary mb-3 mr-5"
          label="Agregar Formulario"
        />
        <BasicButton
          handlerClick={handlerPreview}
          classname="btn btn-primary mb-3"
          label="Previsualizar"
        />
      </div>
    );
  };

  if (preview)
    return <Preview formulario={formulario} setPreview={setPreview} />;

  const hiddenBtnDescription =
    !formulario.nombre || !formulario.description || !formulario.banner;

  return (
    <div className="container mb-5">
      <div className="row mt-5">
        <div className="col-12 col-md-6">
          {!loadingSubmit ? (
            <Tabs
              defaultActiveKey={keyTab}
              onSelect={(k) => setKeyTab(k)}
              activeKey={keyTab}
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="detalle" title="Detalle del Formulario" transition>
                <BasicInput
                  label="Nombre *"
                  id="nombre"
                  type="text"
                  placeholder="Furmulario algo"
                  value={formulario.nombre}
                  handlerChange={handlerNameChange}
                />
                <BasicInput
                  label="Descripción *"
                  id="description"
                  type="text"
                  placeholder="Furmulario algo"
                  value={formulario.description}
                  handlerChange={handlerDescriptionChange}
                />
                <BasicInput
                  label="Color *"
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
                  label="Banner *"
                  id="banner"
                  type="file"
                  handlerChange={handlerBannerChange}
                />
                <div style={{ width: "100%" }}>
                  <img
                    style={{ width: "85%" }}
                    src={formulario.banner || ""}
                    alt={formulario.banner ? formulario.nombre : ""}
                  />
                </div>
                <BasicButton
                  label="Cargar Campos"
                  handlerClick={handlerChangeToAddFields}
                  classname="btn btn-primary mb-3 mr-5"
                  style={{ marginTop: "16px" }}
                  hidden={hiddenBtnDescription}
                />
              </Tab>
              <Tab
                eventKey="campos"
                title="Campos Formulario"
                transition
                disabled={hiddenBtnDescription}
              >
                <InfoCards
                  formulario={formulario}
                  setFormulario={setFormulario}
                />
                <ButtonsSubmit />
              </Tab>
            </Tabs>
          ) : (
            <Loading />
          )}
        </div>

        {keyTab === "campos" && (
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
        )}

        <hr style={{ marginTop: "16px" }} />
      </div>
    </div>
  );
};

export default Crear;
