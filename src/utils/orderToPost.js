const orderToPost = (fields) => {
  let id = 1;
  fields.forEach((field) => {
    field.field_order = id;
    id++;
  });
  return fields
};

export default orderToPost;
