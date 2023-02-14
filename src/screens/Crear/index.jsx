import { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";

import { insertForm } from "../../api";

import { postForm, orderToPost, renameTab } from "../../utils/";

import InfoCards from "./InfoCards";
import TabDetailForm from "./TabDetail";
import FieldsDetail from "./FieldsDetail";

import { Preview } from "../";

import { Loading, BasicButton } from "../../components";

import { DEFAULT_COLOR, TYPE_FORM } from "../../config/config";

const Crear = ({ replicarFormulario, setReplicate, buttonMessage }) => {

  renameTab("Nuevo Formulario");

  const initialState = (replicarFormulario ? replicarFormulario : {
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
        field_minValue: "0",
        //field_maxValue: "99999999",
        field_order: "5",
      },
    ],
    banner: null,
  })

  const [formulario, setFormulario] = useState(initialState);
  const [editTitle, setEditTitle] = useState("");
  const [keyTab, setKeyTab] = useState("detalle");
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [preview, setPreview] = useState(false);
  const [fileSizeAllowed, setFileSizeAllowed] = useState(true);
  const [uuidForm, setUuidForm] = useState(null);
  const [labelAcepto, setLabelAcepto] = useState("");


  useEffect(() => {

    if (replicarFormulario) {
      replicarFormulario.dni = (replicarFormulario.dni instanceof Array ? replicarFormulario.dni.join(";") : replicarFormulario.dni);
      replicarFormulario.estado = "borrador"
      let fieldsArray = [];
      replicarFormulario.fields.forEach((aField, index) => {
        if (aField.field_id == 'fechaHoraRespuesta' || aField.field_id == 'acepto') {
          delete replicarFormulario.fields[index];
        } else {
          fieldsArray.push(aField);
        }
      });
      setFormulario({
        ...replicarFormulario,
        fields: fieldsArray
      });
      setEditTitle("(Replicando formulario '" + formulario.nombre + "')")
    }

  }, [])
  // console.log(formulario);



  const handlerReturnToPrevisualizar = () => {
    setFormulario(null);
    setEditTitle("");
    setReplicate(false);
  }

  const handlerSubmitForm = () => {
    // console.log("handlerSubmit");
    setLoadingSubmit(true);
    //console.log("form dni: "+JSON.stringify(formulario.dni));
    if ((typeof formulario.dni == "string")) {
      formulario.dni = formulario.dni.split(";").filter(n => n); //para filtrar el ultimo valor si escriben comma al final pero no escriben un dni
    }

    const fields = orderToPost(formulario.fields);
    //console.log("form dni: "+JSON.stringify(formulario.dni));


    const fechaHoraRespuestaObject = {
      field_order: (fields.length + 1).toString(),
      field_id: "fechaHoraRespuesta",
      field_name: "fechaHoraRespuesta",
      field_label: "fechaHoraRespuesta",
      field_type: "answerdate",
      field_value: "",
    };
    const aceptoObject = {
      field_order: (fields.length + 2).toString(),
      field_id: "acepto",
      field_name: "acepto",
      field_label: "Acepto",
      field_type: "checkbox",
      field_value: "checked",
      field_required: "required",
    };

    const indexOfFechaHora = fields.indexOf(fechaHoraRespuestaObject);
    if (indexOfFechaHora != -1) {
      fields.splice(indexOfFechaHora, 1);
    }

    const indexOfAcepto = fields.indexOf(aceptoObject);
    if (indexOfAcepto != -1) {
      fields.splice(indexOfAcepto, 1);
    }
    // (fields.indexOf(aceptoObject) != -1 ? fields.splice(fields.indexOf(aceptoObject), 1) : true )

    // fields.splice(fields.indexOf(aceptoObject), 1);
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
        .catch((err) => {
          console.error(err);
          // fields.splice(fields.indexOf(fechaHoraRespuestaObject), 1);
          // fields.splice(fields.indexOf(aceptoObject), 1);
          //console.log("Ocurrio un error!: " + JSON.stringify(error));
        })
        .finally(() => {
          setLoadingSubmit(false);
        });;
    }

    if (TYPE_FORM === "json") {
      postForm(formulario, "post-form-json")
        .then(({ uuid }) => {
          setLoadingSubmit(false);
          setFormulario(initialState);
          setLabelAcepto("");
          setKeyTab("detalle");
          setUuidForm(uuid);
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
      setLoadingSubmit(false);
      });
    }
  };

  const handlerNameChange = ({ target: { value } }) => {
    // console.log("handlerNameChange");
    hanlderCleanURLForm();
    setFormulario({
      ...formulario,
      nombre: value,
    });
  };

  const handlerDniChange = ({ target: { value } }) => {
    // console.log("handlerDniChange");
    hanlderCleanURLForm();
    setFormulario({
      ...formulario,
      //dni: value,.split(";")
      dni: (value.replace(/\s/g, '')),
    });
  };

  const handlerEmailChange = ({ target: { value } }) => {
    // console.log("handlerEmailChange");
    hanlderCleanURLForm();
    setFormulario({
      ...formulario,
      email: value,
    });
  };

  const handlerDescriptionChange = (wysiwygValue) => {
    // console.log(formulario.description);
    if (formulario.description != wysiwygValue) {
      // console.log(wysiwygValue);
      // console.log("handlerDescriptionChange");
      hanlderCleanURLForm();
      //agregado porque al cargar un formulario ya creado, renderizaba muchas veces seguidas y se rompia todo
      setFormulario({
        ...formulario,
        description: wysiwygValue,
      });
    }
    // console.log(wysiwygValue);
  };

  const handlerColorChange = ({ target: { value } }) => {
    // console.log("handlerColorChange");
    hanlderCleanURLForm();
    setFormulario({
      ...formulario,
      hcolor: value,
    });
  };

  const handlerTermYCondChange = ({ target: { value } }) => {
    // console.log("handlerTermYCondChange");
    hanlderCleanURLForm();
    setFormulario({
      ...formulario,
      terminosCondiciones: value,
    });
  };

  const handlerBannerChange = ({ target }) => {
    // console.log("handlerBannerChange");
    hanlderCleanURLForm();
    const files = target.files;
    const fileReader = new FileReader();

    if (files[0].size < 8000000) {
      setFileSizeAllowed(true);
      fileReader.readAsDataURL(files[0]);

      fileReader.onload = ({ target: { result } }) => {
        setFormulario({
          ...formulario,
          banner: result,
        });
      };
    } else {
      setFormulario({
        ...formulario,
        banner: null,
      })
      setFileSizeAllowed(false);
    }

  };

  const handlerBodyEmailChange = (wysiwygValue) => {
    if (formulario.bodyEmail != wysiwygValue) {
      // console.log("handlerBodyEmail");
      hanlderCleanURLForm();
      setFormulario({
        ...formulario,
        bodyEmail: wysiwygValue,
      });
    }
  };

  const handlerLabelAceptoChange = ({ target: { value } }) => {
    // console.log("handlerLabelAceptoChange");
    hanlderCleanURLForm();
    setLabelAcepto(value);
  };

  const hanlderCleanURLForm = () => {
    // console.log("hanlderCleanURLForm");
    if (uuidForm) setUuidForm(null);
  };

  const handlerPreview = () => {
    // console.log("handlerPreview");
    setPreview(true);
  };

  const handlerChangeToAddFields = () => {
    // console.log("handlerChangeToAddFields");
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
      <h2 className="titulo text-center">Crear Formulario </h2>
      <h5 className="titulo text-center">{editTitle} </h5>
      <div className="d-flex justify-content-center">
        {buttonMessage ?
          <BasicButton
            label={buttonMessage}
            handlerClick={handlerReturnToPrevisualizar}
            classname="btn btn-primary mb-3"
          /> : ''
        }
      </div>


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
