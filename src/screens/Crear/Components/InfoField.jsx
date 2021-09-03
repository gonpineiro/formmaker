import "../index.scss";

const InfoField = () => {
  return (
    <div class="card">
      <div class="card-body d-flex align-items-center">
        <span className="me-auto">This is some text within a card body.</span>
        <button type="button" class="btn btn-dark float-end">
          X
        </button>
      </div>
    </div>
  );
};

export default InfoField;
