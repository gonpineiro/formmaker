import InfoCards from "./InfoCards";
import { FieldText, FieldNumber, FieldSelect } from "./Components";
import "./index.scss";

const Crear = () => {
  return (
    <div className="container mb-5">
      <h2 className="titulo">Crear</h2>
      <div className="row mt-5">
        <div className="col-12 col-md-6">
          <h4 className="mb-3">Elegir Campos</h4>
          <div className="accordion" id="accordionFieldType">
            <FieldText />
            <FieldNumber />
            <FieldSelect />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <InfoCards />
        </div>
      </div>
    </div>
  );
};

export default Crear;
