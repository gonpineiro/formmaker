import ReactTooltip from "react-tooltip";
import "../index.scss";

const setDataTip = (element) => {
  let dataTip = "Tipo: " + element.field_type + "<br />";
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

const InfoField = ({ element, handlerDeleteField }) => {
  return (
    <div className="card mb-1">
      <div
        data-for="main"
        data-tip={setDataTip(element)}
        className="card-body d-flex align-items-center pb-2 pt-2"
      >
        <span className="me-auto">{element.field_type}</span>
        <span className="me-auto">
          {element.field_label || element.separator_title}
        </span>
        <button
          type="button"
          className="btn btn-dark float-end"
          onClick={handlerDeleteField}
        >
          X
        </button>
      </div>
      <ReactTooltip id="main" multiline effect="solid" type="info" />
    </div>
  );
};

export default InfoField;
