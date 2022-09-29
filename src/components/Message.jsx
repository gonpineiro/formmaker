import { Link } from "react-router-dom";

const Message = ({ message, backForm, color = "primary" }) => {
  return (
    <div className="container pt-5">
      <div className="col-12 col-md-8 mx-auto pt-5">
        <div className={'alert alert-'+color} role="alert">
          {message}
        </div>
        {backForm && (
          <Link
            className="btn btn-totem col-12 text-center"
            to={"/apps/formmaker/"}
          >
            Volver a Formularios
          </Link>
        )}
      </div>
    </div>
  );
};

export default Message;
