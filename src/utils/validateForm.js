import { className, emailIsValid } from ".";

const validateForm = (fields) => {
  let sendPost = true;
  fields.forEach((req) => {
    if (req.field_type !== "checkbox") {
      if (req.field_value === "" && req.field_required === "required") {
        className("id" + req.field_id, "is-invalid", "add");
        className("id" + req.field_id, "is-valid", "remove");
        sendPost = false;
      } else {
        className("id" + req.field_id, "is-invalid", "remove");
        className("id" + req.field_id, "is-valid", "add");
      }

      if (req.field_type === "email" && !emailIsValid(req.field_value)) {
        className("id" + req.field_id, "is-invalid", "add");
        className("id" + req.field_id, "is-valid", "remove");
        sendPost = false;
      }

      if (req.field_type === "email" && emailIsValid(req.field_value)) {
        className("id" + req.field_id, "is-invalid", "remove");
        className("id" + req.field_id, "is-valid", "add");
      }
    }
  });

  console.log(sendPost);
  return sendPost;
};

export default validateForm;
