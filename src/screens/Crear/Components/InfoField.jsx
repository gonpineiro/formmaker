import "../index.scss";

const InfoField = () => {
  return (
    <div className="card">
      <div className="card-body d-flex align-items-center">
        <span className="me-auto">This is some text within a card body.</span>
        <button type="button" className="btn btn-dark float-end">
          X
        </button>
      </div>
    </div>
  );
};

export default InfoField;
