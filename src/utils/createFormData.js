const createFormData = (form, fields) => {
  const Formdata = new FormData(form);
  let inputValue;
  fields.forEach((req) => {
    // console.group();
    // console.log(req);
    // console.groupEnd();
    if (req.field_name) {
      switch (req.field_type) {
        case "radio":
          const radio = document.getElementsByName(req.field_name);
          if(radio.length > 0){
            radio.forEach((radio) => {
              if (radio.checked) {
                let content;
                // console.log("radio value:");
                // console.log(radio.value);
                if(['otro', 'Otro'].includes(radio.value)){
                  const otherField = document.getElementById("value_" + req.field_id);
                  // console.log("otherField.value");
                  // console.log(otherField.value);
                  // console.log(otherField);
                  if(![null, undefined, ''].includes(otherField.value)){
                    content = otherField.value;
                  }else{
                    content = "-";
                  }
                }else{
                  content = radio.nextSibling.textContent;
                }
                Formdata.set(req.field_name, content);
              }
            });
          }else{
            Formdata.set(req.field_name, "-");
          }
          break;

        case "checkboxes":
          const checkbox = document.getElementsByName(req.field_name);
          if(radio.length > 0){
            let values = [];
            checkbox.forEach((item) => {
              if (item.checked) {
                values.push(item.value);
              }
            });
            Formdata.set(req.field_name, values);
          }else{
            Formdata.set(req.field_name, "-");
          }
          break;

        case "file":
          //console.log("req: "+req);
          //console.log("req: "+JSON.stringify(req));
          const files = document.getElementsByName(req.field_name);
          /*let fileArray = [];
          files.forEach((item) => {
            //if (item.checked) {
              //values.push(item.value);
            //}
          });*/
          //console.log("Campo file: "+document.getElementsByName(req.field_name));
          // console.log("Campo file1: "+document.getElementById(req.field_id));
          // console.log("Campo file2: "+document.getElementById(req.field_id).files);
          // console.log("Campo file3: "+JSON.stringify(document.getElementById(req.field_id)));
          Formdata.append("files[]", document.getElementsByName(req.field_name).files[0]);
          //Formdata.set("files[]", files);
          break;

        default:
          //Formdata.set(req.field_name, Formdata.get(req.field_name));
          //console.log("Field: "+JSON.stringify(Formdata.get(req.field_name)));
          //inputValue = Formdata.get(req.field_name);
          inputValue = document.getElementsByName(req.field_name);
          //console.log("\nInput:"+inputValue);
          // if(req.field_id !== 'acepto' && (inputValue[0].value == undefined || inputValue[0].value == null || inputValue[0].value == 'null')){
          //   Formdata.set(req.field_name, inputValue[0].value);
          // }else{
          //   console.log("\nInput:"+inputValue[0]);
          // }
          if(req.field_id !== 'acepto'){
            // console.log(req.field_name);
            // console.log(inputValue[0]);
            // Formdata.set(req.field_name, ((inputValue[0].value == undefined || inputValue[0].value == null || inputValue[0].value == 'null') ? "-" : inputValue[0].value));
            if([undefined, null, 'null', ''].includes(inputValue[0])){
              Formdata.set(req.field_name, "-");
            }else if([undefined, null, 'null', ''].includes(inputValue[0].value)){
              Formdata.set(req.field_name, "-");
            }else{
              Formdata.set(req.field_name, inputValue[0].value);
            }
          }
          // else{
          //   console.log("\nInput:"+inputValue[0]);
          // }
          break;
      }
    }
  });
  let formObject = {};

  // for (const value of Formdata.values()) {
  //   console.log(value);
  // }

  for (const key of Formdata.keys()) {
    //se agrega esta condicion para probar si el problema de los campos en nulo proviene del front.
    //La idea es que si se devuelve un form data nulo, se le indique al usuario que no se pudo registrar
    //su respuesta. El formdata nulo surge si alguno de los valores obtenidos es nulo

    if(key != "acepto"){
      if(formObject != null){
        if(Formdata.get(key) != null && Formdata.get(key) != 'null' && Formdata.get(key) != undefined ){
          formObject[key] = Formdata.get(key);
        }else{
          formObject = null;
        }
      }
    }
  }
  if(formObject != null){
    delete formObject.acepto;
  }
  // formObject = null; //utilizado para probar el caso nulo

  return formObject;
};

export default createFormData;
