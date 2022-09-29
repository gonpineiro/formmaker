import { BasicButton, BasicInput, BasicTextarea, Message } from "../../components";
import { URL_APP } from "../../config/config";

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
  uuidForm,
}) => {
  const hiddenBtnDescription = !nombre || !dni || !description || !banner;

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
        <BasicTextarea
          label="Descripción *"
          id="description"
          type="text"
          placeholder="Formulario algo"
          rows="3"
          value={description}
          handlerChange={handlerDescriptionChange}
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
        <BasicTextarea
          label="Texto del correo electrónico *"
          id="bodyEmail"
          type="text"
          placeholder="Cuerpo del correo"
          rows="3"
          value={bodyEmail}
          handlerChange={handlerBodyEmailChange}
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
