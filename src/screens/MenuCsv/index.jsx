import { useEffect } from "react";
import { Link } from "react-router-dom";
import { replaceUrl } from "../../utils";

const MenuCsv = () => {
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
        <OptionButton name="Resultados" url="/apps/formmaker/resultados" />
      </div>
    </div>
  );
};

export default MenuCsv;