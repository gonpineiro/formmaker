import { Link } from "react-router-dom";
import "./index.scss";

const Menu = () => {
  return (
    <div className="container">
      <h2 className="titulo text-center">Menu</h2>
      <div className="row mt-5">
        <div className="col flex-row text-center">
          <Link className="btn btn-primary" to="/apps/formulario/crear">
            Crear
          </Link>
        </div>
        <div className="col flex-row text-center">
          <Link className="btn btn-primary" to="/apps/formulario/gestionar">
            Gestionar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
