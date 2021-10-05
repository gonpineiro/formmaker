const getOrderId = (array) => {
  let id = 1;
  if (array.length === 0) {
    return id.toString();
  }

  array.forEach((element) => {
    if (element.field_order >= id) {
      id = parseInt(element.field_order) + 1;
    }
  });

  return id.toString();
};

export default getOrderId;
