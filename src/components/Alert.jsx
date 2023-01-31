import { Link } from "react-router-dom";

const AlertMessage = ({ message, backForm, color = "primary" }) => {
    return (
        <div className="col-12 col-md-8 mx-auto">
            <div className={'text-center alert alert-' + color} role="alert">
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
    );
};

export default AlertMessage;