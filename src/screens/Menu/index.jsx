import { useEffect } from "react";
import { Link } from "react-router-dom";
import { replaceUrl } from "../../utils";
import "./index.scss";

const Menu = () => {
  useEffect(() => {
    replaceUrl("/apps/formmaker/menu");
  });

  return (
    <div className="container">
      <h2 className="titulo text-center">Menu</h2>
      <div className="row mt-5">
        <div className="col flex-row text-center">
          <Link className="btn btn-primary" to="/apps/formmaker/crear">
            Crear
          </Link>
        </div>
        <div className="col flex-row text-center">
          <Link className="btn btn-primary" to="/apps/formmaker/gestionar">
            Gestionar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
