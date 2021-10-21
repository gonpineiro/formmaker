import { useEffect } from "react";
import { Link } from "react-router-dom";
import { replaceUrl } from "../../utils";

const Menu = () => {
  useEffect(() => {
    replaceUrl("/apps/formmaker/menu");
  });

  const OptionButton = ({ name, url, target, rel }) => {
    return (
      <div
        className="col-12 mx-auto text-center mb-3"
        style={{ minWidth: "300px" }}
      >
        <Link
          className="btn btn-totem"
          target={target || ""}
          rel={rel || ""}
          to={url}
        >
          {name}
        </Link>
      </div>
    );
  };

  return (
    <div className="container pt-5">
      <h2 className="titulo text-center mb-5">Formularios Dinámicos</h2>
      <div className="row mt-5">
        <OptionButton name="Crear" url="/apps/formmaker/crear" />
        <OptionButton name="Gestionar" url="/apps/formmaker/gestionar" />
        <OptionButton name="Resultados" url="/apps/formmaker/resultados" />
        <OptionButton name="Comprobar" url="/apps/formmaker/comprobar" />
        <OptionButton
          name="Ir a Formularios"
          url="/apps/formmaker/"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    </div>
  );
};

export default Menu;
