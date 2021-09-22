const BasiCard = ({ title, description, id }) => {
  return (
    <div className="col-12 col-md-4" onClick={() => console.log(id)}>
      <div className="card border-primary mb-3">
        <div className="card-header">{title}</div>
        <div className="card-body text-primary">
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BasiCard;
