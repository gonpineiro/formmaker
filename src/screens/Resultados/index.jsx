import { useEffect, useState } from "react";

import { Loading } from "../../components";
import { URL_WS_RESULTADOS } from "../../config/config";
import { getAllForms } from "../../utils";

const getIdsForms = async (setForms) => {
  let forms = await getAllForms();
  forms = Object.values(forms);
  forms = forms.filter((item) => item !== null);
  setForms(Object.values(forms));
};

const Resultados = () => {
  const [forms, setForms] = useState([]);
  useEffect(() => {
    getIdsForms(setForms);
  }, []);

  if (forms.length === 0) return <Loading />;

  return (
    <div className="container pt-5 px-4">
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
                <div>{form.nombre}</div>
                <div>
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
