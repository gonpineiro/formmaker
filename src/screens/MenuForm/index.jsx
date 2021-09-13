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
        {forms.map((form, key) => (
          <div key={key} className="col md-4 text-center">
            <Link
              className="btn btn-primary mr-5"
              to={"/apps/formulario/" + form.id}
            >
              {form.nombre}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuForm;
