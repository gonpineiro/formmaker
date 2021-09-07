import React from "react";
import Checkbox from "./inputs/Checkbox";
import Date from "./inputs/Date";
import Input from "./inputs/Input";
import Select from "./inputs/Select";
import TextArea from "./inputs/TextArea";

const Element = ({
  field: {
    field_class,
    field_id,
    field_label,
    field_max,
    field_min,
    field_name,
    field_options,
    field_placeholder,
    field_required,
    field_type,
    field_value,
  },
  checked,
  setChecked,
}) => {
  switch (field_type) {
    case "text":
      return (
        <Input
          field_id={field_id}
          field_name={field_name}
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
          field_name={field_name}
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
          field_name={field_name}
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
          field_name={field_name}
          field_label={field_label}
          field_placeholder={field_placeholder}
          field_value={field_value}
          field_required={field_required}
          field_max={field_max}
        />
      );
    case "select":
      return (
        <Select
          field_id={field_id}
          field_name={field_name}
          field_label={field_label}
          field_placeholder={field_placeholder}
          field_value={field_value}
          field_options={field_options}
          field_required={field_required}
        />
      );
    case "checkbox":
      return (
        <Checkbox
          field_id={field_id}
          field_name={field_name}
          field_label={field_label}
          field_placeholder={field_placeholder}
          field_value={field_value}
          field_options={field_options}
          field_required={field_required}
          setChecked={setChecked}
          checked={checked}
        />
      );
    case "date":
      return (
        <Date
          field_id={field_id}
          field_label={field_label}
          field_placeholder={field_placeholder}
          field_required={field_required}
          field_value={field_value}
        />
      );

    default:
      return null;
  }
};

export default Element;
