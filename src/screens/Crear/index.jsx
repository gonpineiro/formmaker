import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";

import { insertForm } from "../../api";

import { postForm, orderToPost } from "../../utils/";

import InfoCards from "./InfoCards";
import TabDetailForm from "./TabDetail";
import FieldsDetail from "./FieldsDetail";

import { Preview } from "../";

import { Loading, BasicButton } from "../../components";

import { DEFAULT_COLOR, TYPE_FORM } from "../../config/config";

const Crear = () => {
  const initialState = {
    nombre: null,
    estado: "borrador",
    dni: null,
    email: null,
    description: null,
    hcolor: DEFAULT_COLOR,
    terminosCondiciones: null,
    bodyEmail: "",
    creationDate: new Date().toLocaleString(),
    fields: [
      //se agrega Nombre y Apellido como obligatorios
      {
        field_required: true,
        field_type: "text",
        field_label: "Nombre",
        field_name: "Nombre",
        field_id: "Nombre",
        field_value: "",
        field_placeholder: "Ingrese su Nombre",
        field_min: "2",
        field_max: "50",
        field_order: "1",
      },
      {
        field_required: true,
        field_type: "text",
        field_label: "Apellido",
        field_name: "Apellido",
        field_id: "Apellido",
        field_value: "",
        field_placeholder: "Ingrese su Apellido",
        field_min: "2",
        field_max: "50",
        field_order: "2",
      },
      {
        field_required: true,
        field_type: "email",
        field_label: "Mail",
        field_name: "Mail",
        field_id: "Mail",
        field_value: "",
        field_placeholder: "Ingrese su correo",
        field_min: "0",
        field_max: "999",
        field_order: "3",
      },
      {
        field_required: true,
        field_type: "number",
        field_label: "Teléfono",
        field_name: "Teléfono",
        field_id: "Teléfono",
        field_value: "",
        field_placeholder: "Ingrese su teléfono",
        field_min: "0",
        field_max: "16",
        field_order: "4",
      },
      {
        field_required: true,
        field_type: "number",
        field_label: "DNI",
        field_name: "DNI",
        field_id: "DNI",
        field_value: "",
        field_placeholder: "Ingrese su Documento",
        field_min: "0",
        field_max: "8",
        field_order: "5",
      },
    ],
    banner: null,
  };

  const [formulario, setFormulario] = useState(initialState);
  const [keyTab, setKeyTab] = useState("detalle");
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [preview, setPreview] = useState(false);
  const [fileSizeAllowed, setFileSizeAllowed] = useState(true);
  const [uuidForm, setUuidForm] = useState(null);
  const [labelAcepto, setLabelAcepto] = useState("");

  const handlerSubmitForm = () => {
    setLoadingSubmit(true);
    //console.log("form dni: "+JSON.stringify(formulario.dni));
    formulario.dni = formulario.dni.split(";").filter(n => n); //para filtrar el ultimo valor si escriben comma al final pero no escriben un dni
    const fields = orderToPost(formulario.fields);
    //console.log("form dni: "+JSON.stringify(formulario.dni));
    //console.log("fields: "+JSON.stringify(fields));

    const fechaHoraRespuestaObject = {
      field_order: fields.length + 1,
      field_id: "fechaHoraRespuesta",
      field_name: "fechaHoraRespuesta",
      field_label: "fechaHoraRespuesta",
      field_type: "answerdate",
      field_value: "",
    };
    const aceptoObject = {
      field_order: fields.length + 1,
      field_id: "acepto",
      field_name: "acepto",
      field_label: "Acepto",
      field_type: "checkbox",
      field_value: "checked",
      field_required: "required",
    };
    fields.push(fechaHoraRespuestaObject);
    fields.push(aceptoObject);

    //console.log("Indice: "+fields.indexOf(fechaHoraRespuestaObject));

    setFormulario(formulario);

    if (TYPE_FORM === "mongo") {
      insertForm(formulario)
        .then(() => {
          setLoadingSubmit(false);
          setFormulario(initialState);
          setLabelAcepto("");
          setKeyTab("detalle");
        })
        .catch(error => {
          fields.splice(fields.indexOf(fechaHoraRespuestaObject), 1);
          fields.splice(fields.indexOf(aceptoObject), 1);
          //console.log("Ocurrio un error!: " + JSON.stringify(error));
        })
        .finally(() => {
          setLoadingSubmit(false);
        });;
    }

    if (TYPE_FORM === "json") {
      //console.log("formulario: "+JSON.stringify(formulario));
      postForm(formulario, "post-form-json")
        .then(({ uuid }) => {
          //console.log("formulario: "+formulario);
          //console.log("formulario: "+JSON.stringify(formulario));
          setLoadingSubmit(false);
          setFormulario(initialState);
          setLabelAcepto("");
          setKeyTab("detalle");
          setUuidForm(uuid);
        })
        .catch(error => {
          fields.splice(fields.indexOf(fechaHoraRespuestaObject), 1);
          fields.splice(fields.indexOf(aceptoObject), 1);
          //console.log("Ocurrio un error!: " + JSON.stringify(error))
          //console.log("Ocurrio un error!: " + error)
        })
        .finally(() => {
          setLoadingSubmit(false);
        });
    }
  };

  const handlerNameChange = ({ target: { value } }) => {
    hanlderCleanURLForm();
    setFormulario({
      ...formulario,
      nombre: value,
    });
  };

  const handlerDniChange = ({ target: { value } }) => {
    hanlderCleanURLForm();
    setFormulario({
      ...formulario,
      //dni: value,.split(";")
      dni: (value.replace(/\s/g, '')),
    });
  };
  //console.log("form dni: "+JSON.stringify(formulario.dni));

  const handlerEmailChange = ({ target: { value } }) => {
    hanlderCleanURLForm();
    setFormulario({
      ...formulario,
      email: value,
    });
  };

  const handlerDescriptionChange = ({ target: { value } }) => {
    hanlderCleanURLForm();
    setFormulario({
      ...formulario,
      description: value,
    });
  };

  const handlerColorChange = ({ target: { value } }) => {
    hanlderCleanURLForm();
    setFormulario({
      ...formulario,
      hcolor: value,
    });
  };

  const handlerTermYCondChange = ({ target: { value } }) => {
    hanlderCleanURLForm();
    setFormulario({
      ...formulario,
      terminosCondiciones: value,
    });
  };

  const handlerBannerChange = ({ target }) => {
    hanlderCleanURLForm();
    const files = target.files;
    const fileReader = new FileReader();

    if(files[0].size < 8000000){
      setFileSizeAllowed(true);
      fileReader.readAsDataURL(files[0]);
  
      fileReader.onload = ({ target: { result } }) => {
        setFormulario({
          ...formulario,
          banner: result,
        });
      };
    }else{
      setFormulario({
        ...formulario,
        banner: null,
      })
      setFileSizeAllowed(false);
    }

  };

  const handlerBodyEmailChange = ({ target: { value } }) => {
    hanlderCleanURLForm();
    setFormulario({
      ...formulario,
      bodyEmail: value,
    });
  };

  const handlerLabelAceptoChange = ({ target: { value } }) => {
    hanlderCleanURLForm();
    setLabelAcepto(value);
  };

  const hanlderCleanURLForm = () => {
    if (uuidForm) setUuidForm(null);
  };

  const handlerPreview = () => {
    setPreview(true);
  };

  const handlerChangeToAddFields = () => {
    setKeyTab("campos");
  };

  const ButtonsSubmit = () => {
    if (formulario.fields.length === 0) return "";

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

  const colWidthCreate = () =>
    keyTab === "detalle" ? "col-12 col-md-12" : "col-12 col-md-6";

  if (preview)
    return <Preview formulario={formulario} setPreview={setPreview} />;

  const hiddenBtnDescription =
    !formulario.nombre || !formulario.dni || !formulario.description || !formulario.banner;

  return (
    <div className="container pt-5 pb-5">
      <h2 className="titulo text-center">Crear Formulario</h2>

      <div className="row mt-5">
        <div className={colWidthCreate()}>
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
                  dni={formulario.dni}
                  handlerDniChange={handlerDniChange}
                  email={formulario.email}
                  handlerEmailChange={handlerEmailChange}
                  description={formulario.description}
                  handlerDescriptionChange={handlerDescriptionChange}
                  hcolor={formulario.hcolor}
                  handlerColorChange={handlerColorChange}
                  terminosCondiciones={formulario.terminosCondiciones}
                  handlerTermYCondChange={handlerTermYCondChange}
                  banner={formulario.banner}
                  fileSizeAllowed={fileSizeAllowed}
                  handlerBannerChange={handlerBannerChange}
                  bodyEmail={formulario.bodyEmail}
                  handlerBodyEmailChange={handlerBodyEmailChange}
                  labelAcepto={labelAcepto}
                  handlerLabelAceptoChange={handlerLabelAceptoChange}
                  handlerChangeToAddFields={handlerChangeToAddFields}
                  uuidForm={uuidForm}
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
          <FieldsDetail formulario={formulario} setFormulario={setFormulario} />
        )}

        <hr style={{ marginTop: "16px" }} />
      </div>
    </div>
  );
};

export default Crear;
