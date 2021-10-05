const getOrderId = (array) => {
  let id = 1;
  if (array.length === 0) {
    return id;
  }

  array.forEach((element) => {
    if (element.order >= id) {
      id = element.order + 1;
    }
  });

  return id;
};

export default getOrderId;
