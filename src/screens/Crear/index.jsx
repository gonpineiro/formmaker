import "./index.scss";

import TabForm from "./TabForm";

const Crear = () => {
  return (
    <div className="container">
      <h2 className="titulo text-center">Crear</h2>
      <div className="row mt-5">
        <div className="col-12 col-md-6">
          <TabForm />
        </div>
        <div className="col-12 col-md-6 text-center">text-center</div>
      </div>
    </div>
  );
};

export default Crear;
