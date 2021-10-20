import ReactTooltip from "react-tooltip";
import { BasicButton } from "../../../components";
import { convertToEsType } from "../../../utils";
import "../index.scss";

const setDataTip = (element) => {
  let dataTip = "Tipo: " + convertToEsType(element.field_type) + "<br />";
  const requiredDesc = element.field_required ? "Si" : "No";
  switch (element.field_type) {
    case "separator":
      dataTip += "Titulo: " + element.separator_title + "<br />";
      dataTip += "Descripción: " + element.separator_description + "<br />";
      break;
    case "link":
      dataTip += "Titulo: " + element.link_title + "<br />";
      dataTip += "URL: " + element.url + "<br />";
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

const InfoField = ({
  element,
  handlerDeleteField,
  innerRef,
  dragHandleProps,
  draggableProps,
}) => {
  console.log(element);
  return (
    <div
      className="card mb-1"
      ref={innerRef}
      {...dragHandleProps}
      {...draggableProps}
    >
      <div data-for="main" data-tip={setDataTip(element)} className="card">
        <div className="card-header d-flex align-items-center pb-2 pt-2">
          <div className="col-4">{convertToEsType(element.field_type)}</div>
          <div className="col-3">{element.field_placeholder || ""}</div>
          <div className="col-3">{element.field_required && "Requerido"}</div>
          <div className="col-2">
            <BasicButton
              label="X"
              handlerClick={handlerDeleteField}
              classname="btn btn-dark float-end"
              style={{ paddingTop: "2px", paddingBottom: "2px" }}
            />
          </div>
        </div>
        <div className="card-body" style={{ padding: "0.5rem 1rem" }}>
          <div className="col-3">
            {element.field_label || element.separator_description}
          </div>
        </div>
      </div>
      <ReactTooltip id="main" multiline effect="solid" type="info" />
    </div>
  );
};

export default InfoField;
