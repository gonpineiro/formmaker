import ReactTooltip from "react-tooltip";
import { BasicButton } from "../../../components";
import "../index.scss";

const setDataTip = (element) => {
  let dataTip = "Tipo: " + convertToEsType(element.field_type) + "<br />";
  const requiredDesc = element.field_required ? "Si" : "No";
  switch (element.field_type) {
    case "separator":
      dataTip += "Titulo: " + element.separator_title + "<br />";
      dataTip += "Descripción: " + element.separator_description + "<br />";
      break;
    case "text":
    case "number":
    case "textarea":
    case "email":
      dataTip += "Etiqueta: " + element.field_label + "<br />";
      dataTip +=
        "Placeholder: " + (element.field_placeholder || "-") + "<br />";
      dataTip += "Longitud Maxima: " + (element.field_max || "0") + "<br />";
      dataTip += "Longitud Minima: " + (element.field_min || "0") + "<br />";
      dataTip += "Requerido: " + requiredDesc + "<br />";
      break;
    case "select":
    case "radio":
    case "checkboxes":
      const options = element.field_options.map((el) => el.option_label);
      dataTip += "Etiqueta: " + element.field_label + "<br />";
      dataTip += "Opciones: " + options.join() + "<br />";
      dataTip += "Requerido: " + requiredDesc + "<br />";
      break;
    default:
      break;
  }
  return dataTip;
};

const convertToEsType = (type) => {
  switch (type) {
    case "separator":
      return "Separador";
    case "text":
      return "Texto";
    case "textarea":
      return "Párrafo";
    case "email":
      return "Email";
    case "number":
      return "Número";
    case "select":
      return "Select";
    case "radio":
      return "Selección Única";
    case "checkboxes":
      return "Selección Múltiple";
    default:
      break;
  }
};

const InfoField = ({
  element,
  handlerDeleteField,
  innerRef,
  dragHandleProps,
  draggableProps,
}) => {
  return (
    <div
      className="card mb-1"
      ref={innerRef}
      {...dragHandleProps}
      {...draggableProps}
    >
      <div
        data-for="main"
        data-tip={setDataTip(element)}
        className="card-body d-flex align-items-center pb-2 pt-2"
      >
        <div className="col-4">{convertToEsType(element.field_type)}</div>
        <div className="col-3">
          {element.field_label || element.separator_description}
        </div>
        <div className="col-3">{element.field_required && "Requerido"}</div>
        <div className="col-2">
          <BasicButton
            label="X"
            handlerClick={handlerDeleteField}
            classname="btn btn-dark float-end"
          />
        </div>
      </div>
      <ReactTooltip id="main" multiline effect="solid" type="info" />
    </div>
  );
};

export default InfoField;
