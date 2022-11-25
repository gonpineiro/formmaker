import { BasicButton, BasicInput, BasicTextarea, Message } from "../../components";
import { URL_APP } from "../../config/config";

// WYSIWIG para descripcion y email
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// import {Editor, EditorState} from 'draft-js';
// import 'draft-js/dist/Draft.css';

// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TabDetailForm = ({
  nombre,
  handlerNameChange,
  dni,
  handlerDniChange,
  email,
  handlerEmailChange,
  description,
  handlerDescriptionChange,
  hcolor,
  handlerColorChange,
  terminosCondiciones,
  handlerTermYCondChange,
  banner,
  fileSizeAllowed,
  handlerBannerChange,
  bodyEmail,
  labelAcepto,
  handlerLabelAceptoChange,
  handlerBodyEmailChange,
  handlerChangeToAddFields,
  uuidForm
}) => {
  const hiddenBtnDescription = !nombre || !dni || !description || !banner;

  const modulesDescription = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      // [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ align: ''  }, { align: 'center', className:'text-center' }, { align: 'right' }, { align: 'justify' }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };
  const modulesEmail = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      // [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ align: ''  }, { align: 'center', className:'text-center' }, { align: 'right' }, { align: 'justify' }],
      ["link"],
      ["clean"],
    ],
  };

  return (
    <div className="row">
      <div className="col-12 col-md-6">
        <BasicInput
          label="Nombre *"
          id="nombre"
          type="text"
          placeholder="Formulario algo"
          value={nombre}
          handlerChange={handlerNameChange}
        />
        <BasicInput
          label="DNI de los encargados* (separar por ';')"
          id="dni"
          type="text"
          placeholder="28394823; 24384932"
          value={dni}
          handlerChange={handlerDniChange}
        />
        {/* <BasicInput
          label="Email del encargado"
          id="email"
          type="email"
          placeholder="juan.perez@gmail.com"
          value={email}
          handlerChange={handlerEmailChange}
        /> */}
        {/* <BasicTextarea
          label="Descripción *"
          id="description"
          type="text"
          placeholder="Formulario algo"
          rows="3"
          value={description}
          handlerChange={handlerDescriptionChange}
          disabled={true}
        /> */}
        <label htmlFor={"description"} className="form-label">
          {"Descripción *"}
        </label>
        {/* <Editor
          id="description"
          type="text"
          placeholder="Formulario algo"
          wrapperClassName="form-control mb-3"
          onChange={handlerDescriptionChange}
        /> */}
        {/* <Editor 
          id="description"
          type="text"
          editorState={description}
          onChange={handlerDescriptionChange} 
        /> */}
        <ReactQuill
          theme="snow"
          id="description"
          className="bg-light"
          placeholder={"Escriba una descripción para el formulario"}
          modules={modulesDescription}
          value={description}
          onChange={handlerDescriptionChange}
        />
        <BasicInput
          label="Color *"
          id="hcolor"
          type="color"
          value={hcolor}
          handlerChange={handlerColorChange}
        />
        <BasicInput
          label="Términos y condiciones"
          id="termCondi"
          type="text"
          value={terminosCondiciones}
          handlerChange={handlerTermYCondChange}
        />
        <BasicInput
          label="Etiqueta de aceptar Términos y condiciones"
          id="labelAcepto"
          type="text"
          value={labelAcepto}
          handlerChange={handlerLabelAceptoChange}
        />
        {/* <BasicTextarea
          label="Texto del correo electrónico *"
          id="bodyEmail"
          type="text"
          placeholder="Cuerpo del correo"
          rows="3"
          value={bodyEmail}
          handlerChange={handlerBodyEmailChange}
        /> */}
        <label htmlFor={"bodyEmail"} className="form-label">
          {"Texto del correo electrónico *"}
        </label>
        <ReactQuill
          theme="snow"
          id="bodyEmail"
          className="bg-light"
          placeholder={"Cuerpo del correo"}
          modules={modulesEmail}
          value={bodyEmail}
          onChange={handlerBodyEmailChange}
        />
        <BasicButton
          label="Cargar Campos"
          handlerClick={handlerChangeToAddFields}
          classname="btn btn-primary mb-3 mr-5"
          style={{ marginTop: "16px", width: "100%" }}
          hidden={hiddenBtnDescription}
        />
      </div>
      <div className="col-12 col-md-6">
        <BasicInput
          label="Banner *"
          id="banner"
          type="file"
          lang="es"
          handlerChange={handlerBannerChange}
        />
        {(!fileSizeAllowed) ? <Message message={"El archivo supera los 8MB de tamaño"} color={"danger"}></Message> : ''}
        <img
          className="rounded pb-3 d-flex mx-auto"
          style={{ width: "70%" }}
          src={banner || ""}
          alt={banner ? nombre : ""}
        />
        {uuidForm && (
          <>
            <h4 className="titulo text-center">Generado correctamente</h4>
            <small className="titulo text-center">
              {URL_APP}?idForm={uuidForm}
            </small>
          </>
        )}
      </div>
    </div>
  );
};

export default TabDetailForm;
