import { useEffect, useState } from "react";
import { Redirect } from "react-router";

import { Loading } from "../../components";
import { URL_WS_RESULTADOS } from "../../config/config";
import { getAllForms } from "../../utils";

const getIdsForms = async (setForms) => {
  let forms = await getAllForms();
  forms = Object.values(forms);
  forms = forms.filter((item) => {
    return item !== null;
  });
  setForms(Object.values(forms));
};

const Resultados = () => {
  const [forms, setForms] = useState([]);
  useEffect(() => {
    getIdsForms(setForms);
  }, []);

  const viewForm = (id) => {
    <Redirect push to={"/apps/formulario?idForm=" + id} />;
  };

  if (forms.length === 0) return <Loading />;

  return (
    <div className="container pt-5">
      <h2 className="titulo text-center">Resultados de Formularios</h2>
      <div className="row pt-5">
        <div className="col-12 col-md-6 mx-auto">
          {forms.map((form, key) => (
            <div key={key} className="row">
              <div
                className="alert d-flex justify-content-between align-items-center"
                style={{ backgroundColor: "#5997d1", color: "white" }}
                role="alert"
              >
                <div className="col-12 col-md-7">{form.nombre}</div>
                <div className="col-12 col-md-5 d-flex justify-content-end">
                  <a
                    href={
                      URL_WS_RESULTADOS + form.id + "&nombreForm=" + form.nombre
                    }
                    rel="noreferrer"
                  >
                    <button type="button" className="btn btn-dark">
                      Descargar .csv
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resultados;
