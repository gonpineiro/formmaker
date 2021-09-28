export const formatField = (field) => {
  let radioField = field;
  let options = radioField.field_options.split(";");

  options = options.filter((item) => item !== "");

  let field_options = [];

  let id = 1;
  options.forEach((option) =>
    field_options.push({
      id,
      option_label: option,
    })
  );
  id++;

  return {
    ...radioField,
    field_options,
  };
};

export default formatField;
