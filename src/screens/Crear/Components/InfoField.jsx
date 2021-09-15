import "../index.scss";

const InfoField = ({ element, handlerDeleteField }) => {
  return (
    <div className="card mb-1">
      <div className="card-body d-flex align-items-center">
        <span className="me-auto">{element.field_type}</span>
        <span className="me-auto">
          {element.field_label || element.separator_title}
        </span>
        <button
          type="button"
          className="btn btn-dark float-end"
          onClick={handlerDeleteField}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default InfoField;
