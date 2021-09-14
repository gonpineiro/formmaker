import { className, emailIsValid } from ".";

const validateForm = (fields) => {
  let sendPost = true;
  fields.forEach((req) => {
    switch (req.field_type) {
      case "email":
        if (req.field_type === "email" && !emailIsValid(req.field_value)) {
          className("id" + req.field_id, "is-invalid", "add");
          className("id" + req.field_id, "is-valid", "remove");
          sendPost = false;
        }

        if (req.field_type === "email" && emailIsValid(req.field_value)) {
          className("id" + req.field_id, "is-invalid", "remove");
          className("id" + req.field_id, "is-valid", "add");
        }
        break;

      case "checkboxes":
        if (req.field_required === "required") {
          const checkbox = document.getElementsByName(req.field_name);
          let countChecked = 0;
          checkbox.forEach((item) => {
            if (item.checked) countChecked++;

            if (countChecked === 0) {
              sendPost = false;
              className("id" + req.field_id, "label-invalid", "add");
            } else {
              className("id" + req.field_id, "label-invalid", "remove");
            }
          });
        }
        break;
      case "checkbox":
      case "radio":
      case "separator":
        break;

      default:
        if (req.field_value === "" && req.field_required === "required") {
          className("id" + req.field_id, "is-invalid", "add");
          className("id" + req.field_id, "is-valid", "remove");
          sendPost = false;
        } else {
          className("id" + req.field_id, "is-invalid", "remove");
          className("id" + req.field_id, "is-valid", "add");
        }
        break;
    }
  });

  return sendPost;
};

export default validateForm;
