import { useState } from "react";
import { FieldText, FieldNumber, FielSelect } from "./Components";

const TabForm = () => {
  const [field, setField] = useState({ required: true, type: "type_text" });

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
  const handlerTypeFieldChange = ({ target: { value } }) => {
    setField({
      ...field,
      type: value,
    });
  };

  return (
    <>
      <h4 className="mb-3">Elegir Campos</h4>
      <div className="accordion" id="accordionFieldType">
        <FieldText
          handlers={{
            handlerTextFieldChange,
            handlerTypeFieldChange,
            handlerRequiredFieldChange,
          }}
          field={field}
        />
        <FieldNumber />
        <FielSelect />
      </div>
    </>
  );
};

export default TabForm;
