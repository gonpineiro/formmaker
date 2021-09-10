const createFormData = (form, fields) => {
  const Formdata = new FormData(form);
  fields.forEach((req) => {
    if (req.field_name) {
      if (req.field_type === "radio") {
        const radio = document.getElementsByName(req.field_name);
        radio.forEach((radio) => {
          if (radio.checked) {
            const content = radio.nextSibling.textContent;
            Formdata.set(req.field_name, content);
          }
        });
      } else {
        Formdata.set(req.field_name, Formdata.get(req.field_name));
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
