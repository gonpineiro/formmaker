const createFormData = (form, fields) => {
  const Formdata = new FormData(form);
  fields.forEach((req) => {
    if (req.field_name) {
      switch (req.field_type) {
        case "radio":
          const radio = document.getElementsByName(req.field_name);
          radio.forEach((radio) => {
            if (radio.checked) {
              const content = radio.nextSibling.textContent;
              Formdata.set(req.field_name, content);
            }
          });
          break;
        case "checkboxes":
          const checkbox = document.getElementsByName(req.field_name);
          let values = [];
          checkbox.forEach((item) => {
            if (item.checked) {
              values.push(item.value);
            }
          });
          Formdata.set(req.field_name, values);
          break;

        default:
          Formdata.set(req.field_name, Formdata.get(req.field_name));
          break;
      }
    }
  });
  const formObject = {};

  for (const key of Formdata.keys()) {
    formObject[key] = Formdata.get(key);
  }

  return formObject;
};

export default createFormData;
