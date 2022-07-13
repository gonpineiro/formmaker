const asteriscos = (field_required) => {
  if (field_required === "true" || field_required === true) {
    return <span className="text-danger fw-bold"> *</span>;
  }
};

export default asteriscos