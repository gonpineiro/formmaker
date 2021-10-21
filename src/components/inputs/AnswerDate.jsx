import React, { useContext } from "react";

import { FormContext } from "../../screens/FormContext";

const AnswerDate = ({ field_id, field_name }) => {
  const time = new Date().toLocaleString();
  const { handleChange } = useContext(FormContext);

  const handleInputChange = (event) => {
    handleChange(field_id, event);
  };

  return (
    <input
      type="text"
      className={"form-control"}
      id={"id" + field_id}
      name={field_name}
      placeholder={time.slice(0, 21)}
      value={time.slice(0, 21)}
      onChange={handleInputChange}
      required={false}
      maxLength="21"
      hidden
    />
  );
};

export default AnswerDate;
