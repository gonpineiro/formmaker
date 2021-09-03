import "./index.scss";

import TabForm from "./TabForm";
import InfoCards from "./InfoCards";

const Crear = () => {
  return (
    <div className="container">
      <h2 className="titulo">Crear</h2>
      <div className="row mt-5">
        <div className="col-12 col-md-6">
          <TabForm />
        </div>
        <div className="col-12 col-md-6">
          <InfoCards />
        </div>
      </div>
    </div>
  );
};

export default Crear;
