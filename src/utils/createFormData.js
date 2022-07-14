const createFormData = (form, fields) => {
  const Formdata = new FormData(form);
  console.log("form: "+Formdata);
  console.log("form: "+JSON.stringify(Formdata));
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

        case "file":
          console.log("req: "+req);
          console.log("req: "+JSON.stringify(req));
          const files = document.getElementsByName(req.field_name);
          /*let fileArray = [];
          files.forEach((item) => {
            //if (item.checked) {
              //values.push(item.value);
            //}
          });*/
          //console.log("Campo file: "+document.getElementsByName(req.field_name));
          console.log("Campo file1: "+document.getElementById(req.field_id));
          console.log("Campo file2: "+document.getElementById(req.field_id).files);
          console.log("Campo file3: "+JSON.stringify(document.getElementById(req.field_id)));
          Formdata.append("files[]", document.getElementsByName(req.field_name).files[0]);
          //Formdata.set("files[]", files);
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

  delete formObject.acepto;

  return formObject;
};

export default createFormData;
