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
      return "Desplegable";
    case "selectSearch":
      return "Desplegable Búsqueda";
    case "radio":
      return "Selección Única";
    case "checkboxes":
      return "Selección Múltiple";
    case "link":
      return "Link";
    case "date":
      return "Fecha";
    case "file":
      return "Archivo";
    default:
      break;
  }
};

export default convertToEsType;
