import { useEffect } from "react";
import { Link } from "react-router-dom";
import { replaceUrl } from "../../utils";
import "./index.scss";

const Menu = () => {
  useEffect(() => {
    replaceUrl("/apps/formmaker/menu");
  });

  return (
    <div className="container pt-5">
      <h2 className="titulo text-center mb-5">Formularios Dinámicos</h2>
      <div className="row mt-5">
        <div
          className="col-12 mx-auto text-center mb-3"
          style={{ minWidth: "300px" }}
        >
          <Link className="btn btn-totem" to="/apps/formmaker/crear">
            Crear
          </Link>
        </div>
        <div
          className="col-12 mx-auto text-center mb-3"
          style={{ minWidth: "300px" }}
        >
          <Link className="btn btn-totem" to="/apps/formmaker/gestionar">
            Gestionar
          </Link>
        </div>
        <div
          className="col-12 mx-auto text-center mb-3"
          style={{ minWidth: "300px" }}
        >
          <Link className="btn btn-totem" to="/apps/formmaker/resultados">
            Resultados
          </Link>
        </div>
        <div
          className="col-12 mx-auto text-center mb-3"
          style={{ minWidth: "300px" }}
        >
          <Link className="btn btn-totem" to="/apps/formmaker/comprobar">
            Comprobar
          </Link>
        </div>
        <div
          className="col-12 mx-auto text-center mb-3"
          style={{ minWidth: "300px" }}
        >
          <Link
            className="btn btn-totem"
            to="/apps/formmaker/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ir a Formularios
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
