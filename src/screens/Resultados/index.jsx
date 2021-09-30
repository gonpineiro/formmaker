import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Loading } from "../../components";

import { getAllForms } from "../../utils";
import "./index.scss";
const getCsvUrl =
  "http://200.85.183.194:90/apps/formmaker/backend/getRespuestas.php?formulario=";
const getIdsForms = async (setForms) => {
  let forms = await getAllForms();
  forms = Object.values(forms);
  console.log(forms);
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

  if (forms.length === 0) return <Loading />;

  return (
    <div className="container pt-5">
      <h2 className="titulo text-center">Resultados de Formularios</h2>
      <div className="row pt-5">
        <div className="col-12 col-md-8 mx-auto">
          {forms.map((form, key) => (
            <div key={key} className="row">
              <div
                className="alert d-flex justify-content-between align-items-center"
                style={{ backgroundColor: "#5997d1", color: "white" }}
                role="alert"
              >
                <div className="col-12 col-md-7">{form.nombre}</div>
                <div className="col-12 col-md-5 d-flex justify-content-evenly">
                  <Link
                    className="menu-link"
                    to={"/apps/formulario/" + form.id}
                    target="_blank"
                  >
                    <button type="button" className="btn btn-light">
                      Ver Formulario
                    </button>
                  </Link>
                  <a
                    href={getCsvUrl + form.id + "&nombreForm=" + form.nombre}
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
