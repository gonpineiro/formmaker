import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllForms } from "../../utils";
import "./index.scss";

const getIdsForms = async (setForms) => {
  let forms = await getAllForms();
  forms = Object.values(forms);
  forms = forms.filter((item) => {
    return item !== null;
  });
  setForms(Object.values(forms));
};

const MenuForm = () => {
  const [forms, setForms] = useState([]);
  useEffect(() => {
    getIdsForms(setForms);
  }, []);

  return (
    <div className="container">
      <h2 className="titulo text-center">Listado de formularios</h2>
      <div className="row mt-5">
        <div className="col-7 mx-auto">
          {forms.map((form, key) => (
            <div key={key} className="col-12 md-4">
              <Link
                className="menu-link col-12 text-center"
                to={"/apps/formulario/" + form.id}
              >
                <div
                  className="alert"
                  style={{ backgroundColor: "#5997d1", color: "white" }}
                  role="alert"
                >
                  {form.nombre}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuForm;
