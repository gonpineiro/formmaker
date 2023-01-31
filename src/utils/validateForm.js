import { className, emailIsValid } from ".";

const validateForm = (fields) => {
  let sendPost = true;
  fields.forEach((req) => {

    if (req.field_dependant == "true" && req.field_dependsOnField != "-1") {
      let filteredField = fields.filter((field) => {
          return (field.field_id == req.field_dependsOnField);
      });

      if(filteredField.length == 1){
        // console.log("funciona!");
        // console.log(filteredField);
          if(filteredField[0].field_value == req.field_optionExpected){
          //     // console.log("Lo consegui!");
          //     field_type_if_can_show = field_type;
              req.field_required = true;
          }else{
              req.field_required = false;
          }
      }
  }

    //console.log("hola");
    switch (req.field_type) {
      case "email":
        if (!emailIsValid(req.field_value)) {
          className("id" + req.field_id, "is-invalid", "add");
          className("id" + req.field_id, "is-valid", "remove");
          sendPost = false;
        } else {
          className("id" + req.field_id, "is-invalid", "remove");
          className("id" + req.field_id, "is-valid", "add");
        }
        break;

      case "checkboxes":
      case "radio":
        if(req.field_required === true || req.field_required === "true"){
          //console.log("required? "+ req.field_required);
          const radio = document.getElementsByName(req.field_name);
          let countRadio = 0;
          radio.forEach((radio) => {
            if (radio.checked) countRadio++;
          });
          if (countRadio === 0) {
            sendPost = false;
            className("id" + req.field_id, "label-invalid", "add");
          } else {
            className("id" + req.field_id, "label-invalid", "remove");
          }
        }
        break;

      case "checkbox":
      case "separator":
        break;

      case "number":
        if (req.field_value === "" && (req.field_required === "true" || req.field_required === true) ) {
          className("id" + req.field_id, "is-invalid", "add");
          className("id" + req.field_id, "is-valid", "remove");
          sendPost = false;
        } else {
          if (req.field_value !== "" && (req.field_required === "true" || req.field_required === true)) {
            className("id" + req.field_id, "is-invalid", "remove");
            className("id" + req.field_id, "is-valid", "add");
          }

          if (req.field_value !== "" && (req.field_value < req.field_minValue)){
            className("id" + req.field_id, "is-invalid", "add");
            className("id" + req.field_id, "is-valid", "remove");
          }
  
          if (req.field_value !== "" && (req.field_value > req.field_maxValue)){
            className("id" + req.field_id, "is-invalid", "add");
            className("id" + req.field_id, "is-valid", "remove");
          }
        }
        
        break;

      default:
        if (req.field_value === "" && (req.field_required === "true" || req.field_required === true) ) {
          className("id" + req.field_id, "is-invalid", "add");
          className("id" + req.field_id, "is-valid", "remove");
          sendPost = false;
        } else {
          if (req.field_value !== "" && (req.field_required === "true" || req.field_required === true)) {
            className("id" + req.field_id, "is-invalid", "remove");
            className("id" + req.field_id, "is-valid", "add");
          }
        }
        break;
    }
  });

  return sendPost;
};

export default validateForm;
