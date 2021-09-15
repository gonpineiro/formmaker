import { Link } from "react-router-dom";

const Message = ({ message }) => {
  return (
    <div className="container pt-5">
      <div className="col-12 col-md-8 mx-auto pt-5">
        <div className="alert alert-primary" role="alert">
          {message}
        </div>
        <Link
          className="btn btn-totem col-12 text-center"
          to={"/apps/formmaker/"}
        >
          Volver a Formularios
        </Link>
      </div>
    </div>
  );
};

export default Message;
