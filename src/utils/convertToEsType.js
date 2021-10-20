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
    case "link":
      return "Link";
    default:
      break;
  }
};

export default convertToEsType;
