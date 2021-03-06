import { useState } from "react";
import { Link } from "react-router-dom";
import { URL_WS_COMPROBAR } from "../../config/config";

const Comprobar = () => {
  const [numDni, setNumDni] = useState("");
  const [forms, setForms] = useState(null);
  const checkUserWithForm = (event) => {
    event.preventDefault();
    if (numDni) {
      fetch(URL_WS_COMPROBAR + numDni)
        .then((response) => response.json())
        .then((data) => setForms(data));
    } else {
      setForms(null);
    }
  };
  return (
    <div className="container pt-5">
      <h2 className="titulo text-center">Comprobar Usuarios</h2>
      <p className="titulo text-center">
        Usuarios que hayan completado formularios
      </p>
      <div className="row mt-5">
        <div className="col flex-row text-center">
          <div className="col-12 col-md-4 mb-4 mx-auto">
            <label htmlFor="numDni" className="form-label">
              Número DNI
            </label>
            <input
              type="number"
              className="form-control"
              id="numDni"
              placeholder="99999999"
              onChange={(event) => setNumDni(event.target.value)}
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-totem mb-3" onClick={checkUserWithForm}>
              Buscar
            </button>
          </div>

          {forms ? InfoFormulario(forms) : null}
          {/* en vez de null se puede usar avisoIngresarDatos() */}
          <div className="col-auto mt-5">
            <Link
              className="btn btn-back mb-3 col-12 col-md-5"
              to="/apps/formmaker/"
            >
              Volver atrás
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

function InfoFormulario(forms) {
  return (
    <div className="col-12 col-md-5 mt-5 mx-auto">
      <h5 className="titulo mb-3">Formularios completados:</h5>
      {forms.length && forms.length !== 0
        ? forms.map((form) => (
            <div key={form.idForm} className="alert alert-info" role="alert">
              {form.nombre}
            </div>
          ))
        : avisoSinDatos()}
    </div>
  );
}

// function avisoIngresarDatos() {
//   return (
//     <div className="col-12 col-md-5 mt-5 mx-auto">
//       <div className="alert alert-info" role="alert">
//         Ingrese un DNI
//       </div>
//     </div>
//   );
// }

function avisoSinDatos() {
  return (
    <div className="alert alert-info" role="alert">
      No tiene
    </div>
  );
}

export default Comprobar;
