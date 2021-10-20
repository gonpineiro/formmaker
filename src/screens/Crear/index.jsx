import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";

import { insertForm } from "../../api";

import { postForm, orderToPost } from "../../utils/";

import InfoCards from "./InfoCards";
import TabDetailForm from "./TabDetail";
import FieldsDetail from "./FieldsDetail";

import { Preview } from "../";

import { Loading, BasicButton } from "../../components";

import { TYPE_FORM, URL_APP } from "../../config/config";
import initialState from "./initialState";

const Crear = () => {
  const [formulario, setFormulario] = useState(initialState);
  const [keyTab, setKeyTab] = useState("detalle");
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [preview, setPreview] = useState(false);
  const [uuidForm, setUuidForm] = useState(null);

  const handlerSubmitForm = () => {
    setLoadingSubmit(true);
    const fields = orderToPost(formulario.fields);

    fields.push({
      field_order: fields.length + 1,
      field_id: "acepto",
      field_name: "acepto",
      field_label: "He leído y acepto las bases y condiciones.",
      field_type: "checkbox",
      field_value: "checked",
      field_required: "required",
    });

    setFormulario(formulario);

    if (TYPE_FORM === "mongo") {
      insertForm(formulario).then(() => {
        setLoadingSubmit(false);
        setFormulario(initialState);
        setKeyTab("detalle");
      });
    }

    if (TYPE_FORM === "json") {
      postForm(formulario, "post-form-json").then(({ uuid }) => {
        setLoadingSubmit(false);
        setFormulario(initialState);
        setKeyTab("detalle");
        setUuidForm(uuid);
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

  const handlerBodyEmailChange = ({ target: { value } }) => {
    setFormulario({
      ...formulario,
      bodyEmail: value,
    });
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
                <TabDetailForm
                  nombre={formulario.nombre}
                  handlerNameChange={handlerNameChange}
                  description={formulario.description}
                  handlerDescriptionChange={handlerDescriptionChange}
                  hcolor={formulario.hcolor}
                  handlerColorChange={handlerColorChange}
                  terminosCondiciones={formulario.terminosCondiciones}
                  handlerTermYCondChange={handlerTermYCondChange}
                  banner={formulario.banner}
                  handlerBannerChange={handlerBannerChange}
                  bodyEmail={formulario.bodyEmail}
                  handlerBodyEmailChange={handlerBodyEmailChange}
                  handlerChangeToAddFields={handlerChangeToAddFields}
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

        {uuidForm && (
          <div className="col-12 col-md-6 uuid-form">
            <h4>Generado correctamente</h4>
            <small>
              {URL_APP}?idForm={uuidForm}
            </small>
          </div>
        )}

        {keyTab === "campos" && (
          <FieldsDetail formulario={formulario} setFormulario={setFormulario} />
        )}

        <hr style={{ marginTop: "16px" }} />
      </div>
    </div>
  );
};

export default Crear;
