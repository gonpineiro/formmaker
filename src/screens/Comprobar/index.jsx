import { useState } from "react";

import "./index.scss";

const Comprobar = () => {
  const [numDni, setNumDni] = useState("");
  const [forms, setForms] = useState(null);
  const checkUserWithForm = (event) => {
    event.preventDefault();
    fetch(`http://storage2:82/api_v1/muniForms/${numDni}`)
      .then((response) => response.json())
      .then((data) => setForms(data));
  };
  console.log(forms);
  return (
    <div className="container pt-5">
      <h2 className="titulo text-center">Comprobar Usuarios</h2>
      <p className="titulo text-center">
        Usuarios que hayan completado encuesta
      </p>
      <div className="row mt-5">
        <div className="col flex-row text-center">
          <div className="col-12 col-md-5 mb-3 mx-auto">
            <label htmlFor="numDni" className="form-label">
              Número DNI
            </label>
            <input
              type="number"
              className="form-control"
              id="numDni"
              placeholder="32020923"
              onChange={(event) => setNumDni(event.target.value)}
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-totem mb-3" onClick={checkUserWithForm}>
              Buscar
            </button>
          </div>

          {forms ? (
            <div className="col-12 col-md-5 mt-5 mx-auto">
              <h5 className="titulo mb-3">Encuenstas completadas</h5>

              {forms.map((form) => (
                <div className="alert alert-info" role="alert">
                  {form.nombre}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Comprobar;
