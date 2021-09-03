const TabForm = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Agregar campo de texto</h5>
        <div className="form-group">
          <label htmlFor="text_field">Nombre del campo</label>
          <input
            type="email"
            className="form-control"
            id="text_field"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
};

export default TabForm;
