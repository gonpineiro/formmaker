const createFormData = (form, fields) => {
  const Formdata = new FormData(form);
  fields.forEach((req) => {
    console.log(req);
    Formdata.set(req.field_name, Formdata.get(req.field_name));
    console.log(req.field_name);
  });
  const formObject = {};

  for (const key of Formdata.keys()) {
    formObject[key] = Formdata.get(key);
  }

  console.log(formObject);
  return formObject;
};

export default createFormData;
