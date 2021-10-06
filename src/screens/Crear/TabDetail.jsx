import { BasicButton, BasicInput } from "../../components";

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
  handlerChangeToAddFields,
}) => {
  const hiddenBtnDescription = !nombre || !description || !banner;

  return (
    <>
      <BasicInput
        label="Nombre *"
        id="nombre"
        type="text"
        placeholder="Furmulario algo"
        value={nombre}
        handlerChange={handlerNameChange}
      />
      <BasicInput
        label="Descripción *"
        id="description"
        type="text"
        placeholder="Furmulario algo"
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
        label="Banner *"
        id="banner"
        type="file"
        handlerChange={handlerBannerChange}
      />
      <div style={{ width: "100%" }}>
        <img
          style={{ width: "85%" }}
          src={banner || ""}
          alt={banner ? nombre : ""}
        />
      </div>
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
