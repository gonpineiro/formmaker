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
    field_min,
    field_max,
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
          field_min={field_min}
          field_max={field_max}
          field_type={field_type}
        />
      );
    case "number":
      return (
        <Input
          field_id={field_id}
          field_label={field_label}
          field_placeholder={field_placeholder}
          field_value={field_value}
          field_required={field_required}
          field_class={field_class}
          field_min={field_min}
          field_max={field_max}
          field_type={field_type}
        />
      );
    case "email":
      return (
        <Input
          field_id={field_id}
          field_label={field_label}
          field_placeholder={field_placeholder}
          field_value={field_value}
          field_required={field_required}
          field_class={field_class}
          field_min={field_min}
          field_max={field_max}
          field_type={field_type}
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
