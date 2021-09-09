const createFormData = (form, fields) => {
  const Formdata = new FormData(form);
  fields.forEach((req) => {
    if (req.field_name) {
      Formdata.set(req.field_name, Formdata.get(req.field_name));
    }
  });
  const formObject = {};

  for (const key of Formdata.keys()) {
    formObject[key] = Formdata.get(key);
  }

  return formObject;
};

export default createFormData;
