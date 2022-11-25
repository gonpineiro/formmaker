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

  const handleCopyClick = (event) => {
    const idForm = "form-"+event.target.getAttribute("data-id");
    // console.log(idForm);
    const linkElementToForm = document.getElementById(idForm);

    const linkToForm = linkElementToForm.getAttribute("href");

    // console.log(linkToForm);
    // console.log(window.location.origin);
    // Get the text field
    // var copyText = document.getElementById("myInput");

    // // Select the text field
    // linkToForm.select();
    // linkToForm.setSelectionRange(0, 99999); // For mobile devices

    navigator.clipboard.writeText((window.location.origin+linkToForm));

    // // Alert the copied text
    // alert("Copied the text: " + copyText.value);
  }

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
              className="col-12 m-0 row"
              hidden={form.estado !== "activo"}
            >
              <Link
                className="menu-link col p-0"
                to={redirectFormUrl(form)}
                id={"form-"+key}
              >
                <div
                  className="alert col-12 text-center"
                  style={{ backgroundColor: "#5997d1", color: "white" }}
                  role="alert"
                >
                  {form.nombre}
                </div>
              </Link>
              <div
                className="alert col-1 text-center d-flex justify-content-center copyLink"
                title="Copiar enlace"
                data-id={key}
                style={{ backgroundColor: "#5997d1", color: "white", cursor: "pointer" }}
                onClick={handleCopyClick}
              >
                <i class="large material-icons text-white my-auto" title="Copiar enlace" data-id={key}>content_copy</i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuForm;
