import React from "react";
import Input from "./inputs/Input";
import TextArea from "./inputs/TextArea";
import Select from "./inputs/Select";
const Element = ({
  field: {
    field_type,
    field_id,
    field_label,
    field_required,
    field_placeholder,
    field_value,
    field_options,
    field_class,
  },
}) => {
  switch (field_type) {
    case "text":
      return (
        <Input
          field_id={field_id}
          field_label={field_label}
          field_placeholder={field_placeholder}
          field_value={field_value}
          field_required={field_required}
          field_class={field_class}
        />
      );
    case "textArea":
      return (
        <TextArea
          field_id={field_id}
          field_label={field_label}
          field_placeholder={field_placeholder}
          field_value={field_value}
          field_required={field_required}
        />
      );
    case "select":
      return (
        <Select
          field_id={field_id}
          field_label={field_label}
          field_placeholder={field_placeholder}
          field_value={field_value}
          field_options={field_options}
          field_required={field_required}
        />
      );
    default:
      return null;
  }
};

export default Element;
