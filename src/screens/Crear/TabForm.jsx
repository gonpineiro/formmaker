import { useState } from "react";
import { FieldText, FieldNumber, FielSelect } from "./Components";

const TabForm = () => {
  const [field, setField] = useState({ required: true, type: "text" });

  const handlerTextFieldChange = ({ target: { value } }) => {
    setField({
      ...field,
      textField: value,
    });
  };

  const handlerRequiredFieldChange = () => {
    setField({
      ...field,
      required: !field.required,
    });
  };
  const handlerTypeFieldChange = ({ target: { value, id } }) => {
    if (id === "text_field_radio_email" && value === "on") {
      setField({
        ...field,
        type: "email",
      });
    }
    if (id === "text_field_radio_text" && value === "on") {
      setField({
        ...field,
        type: "text",
      });
    }
    if (id === "text_field_radio_paragraph" && value === "on") {
      setField({
        ...field,
        type: "paragraph",
      });
    }
  };

  console.log(field);
  return (
    <>
      <h4 className="mb-3">Elegir Campos</h4>
      <div class="accordion" id="accordionFieldType">
        <FieldText />
        <FieldNumber />
        <FielSelect />
      </div>
    </>
  );
};

export default TabForm;
