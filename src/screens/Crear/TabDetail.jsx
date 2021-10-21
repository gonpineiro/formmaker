import { BasicButton, BasicInput, BasicTextarea } from "../../components";

const TabDetailForm = ({
  nombre,
  handlerNameChange,
  description,
  handlerDescriptionChange,
  hcolor,
  handlerColorChange,
  terminosCondiciones,
  handlerTermYCondChange,
  banner,
  handlerBannerChange,
  bodyEmail,
  handlerBodyEmailChange,
  handlerChangeToAddFields,
}) => {
  const hiddenBtnDescription = !nombre || !description || !banner;

  return (
    <>
      <img
        className="rounded pb-3"
        style={{ width: "100%" }}
        src={banner || ""}
        alt={banner ? nombre : ""}
      />
      <BasicInput
        label="Nombre *"
        id="nombre"
        type="text"
        placeholder="Formulario algo"
        value={nombre}
        handlerChange={handlerNameChange}
      />
      <BasicInput
        label="Banner *"
        id="banner"
        type="file"
        lang="es"
        handlerChange={handlerBannerChange}
      />
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
        style={{ marginTop: "16px" }}
        hidden={hiddenBtnDescription}
      />
    </>
  );
};

export default TabDetailForm;
