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
      dataTip += "Etiqueta: " + element.field_label + "<br />";
      dataTip += "Longitud Maxima: " + (element.max_lenght || "0") + "<br />";
      dataTip += "Longitud Minima: " + (element.min_lenght || "0") + "<br />";
      dataTip += "Requerido: " + requiredDesc + "<br />";
      break;
    case "select":
      dataTip += "Etiqueta: " + element.field_label + "<br />";
      dataTip += "Opciones: " + element.field_options.join() + "<br />";
      break;
    default:
      break;
  }
  return dataTip;
};

const InfoField = ({ element, handlerDeleteField }) => {
  console.log(element);
  return (
    <div className="card mb-1">
      <div
        data-for="main"
        data-tip={setDataTip(element)}
        className="card-body d-flex align-items-center hover"
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
