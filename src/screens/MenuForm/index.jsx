import { useEffect, useState } from "react";
import { Link, useLocation, Redirect } from "react-router-dom";

import { Loading } from "../../components";

import { getAllForms } from "../../utils";
import { getAllForms as getAll } from "../../api";
import { TYPE_FORM } from "../../config/config";

const getIdsForms = async (setForms) => {
  if (TYPE_FORM === "mongo") {
    let forms = await getAll();
    forms = forms.data.data;
    forms = Object.values(forms);
    forms = forms.filter((item) => item !== null);

    setForms(Object.values(forms));
  }

  if (TYPE_FORM === "json") {
    let forms = await getAllForms();
    forms = Object.values(forms);
    forms = forms.filter((item) => item !== null);

    setForms(Object.values(forms));
  }
};

const useQuery = () => new URLSearchParams(useLocation().search);

const redirectFormUrl = (form) => {
  //console.log("type: "+TYPE_FORM);
  //console.log("es JSON?: "+(TYPE_FORM === "json"));
  if (TYPE_FORM === "mongo") return "/apps/formmaker?idForm=" + form._id;
  //https://weblogin.muninqn.gov.ar/apps/formmaker?idForm=62e2c1c7a0140
  if (TYPE_FORM === "json") return "/apps/formmaker?idForm=" + form.id;
};

const MenuForm = () => {
  const idForm = useQuery().get("idForm");

  const [forms, setForms] = useState([]);
  useEffect(() => {
    getIdsForms(setForms);
  }, []);

  if (forms.length === 0) return <Loading />;
  
  if (idForm) return <Redirect push to={"/apps/formulario/" + idForm} />;
  return (
    <div className="container pt-5">
      <h2 className="titulo text-center">Hacé click e inscribite</h2>
      <div className="row pt-5">
        <div className="col-12 col-md-6 mx-auto">
          {forms.map((form, key) => (
            <div
              key={key}
              className="col-12 md-4"
              hidden={form.estado !== "activo"}
            >
              <Link
                className="menu-link col-12 text-center"
                to={redirectFormUrl(form)}
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
