import { useState, useEffect } from "react";
/* import { useHistory } from "react-router-dom"; */
import { connect } from "react-redux";

import Element from "../../components/Element";
import { FormContext } from "../FormContext";
import { getForm, className, replaceUrl } from "../../utils";

import "./index.scss";

const getFormaData = async (setElements, setLoading, idForm) => {
  const formData = await getForm(idForm);
  if (!formData.error) {
    const json = JSON.parse(formData.string);
    json.fields = json.fields.sort((a, b) => a.field_order - b.field_order);
    setElements(json);
  } else {
    setElements(undefined);
  }
  setLoading(false);
};

const Formulario = ({ userReducer: { idForm } }) => {
  /* const history = useHistory(); */
  const [elements, setElements] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    replaceUrl("/apps/formulario/");
    if (!idForm) {
      /* Enviamos a un screen 404 */
      setLoading(false);
    } else {
      getFormaData(setElements, setLoading, idForm);
      console.log(fields);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { banner, description, fields, terminosCondiciones, nombre } =
    elements ?? {};
  const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const fields = elements.fields;
    let sendPost = true;
    console.log(fields);
    fields.forEach((req) => {
      if (req.field_value === "" && req.field_required === "required") {
        className("id" + req.field_id, "is-invalid", "add");
        className("id" + req.field_id, "is-valid", "remove");
        sendPost = false;
      } else {
        className("id" + req.field_id, "is-invalid", "remove");
        className("id" + req.field_id, "is-valid", "add");
      }
      if (req.field_type === "email" && !emailIsValid(req.field_value)) {
        className("id" + req.field_id, "is-invalid", "add");
        className("id" + req.field_id, "is-valid", "remove");
      }
    });

    if (sendPost) {
      console.log("Post");
    }
  };

  const handleChange = (id, event) => {
    const newElements = { ...elements };
    newElements.fields.forEach((field) => {
      const { field_id } = field;
      if (id === field_id) {
        field["field_value"] = event.target.value;
      }
      setElements(newElements);
    });
  };

  if (loading) return "Loading";

  if (!elements) return "404";

  return (
    <FormContext.Provider value={{ handleChange }}>
      <div className="App container mb-5">
        <img className="img-fluid" src={banner} alt="" />
        <div className="d-flex justify-content-center">
          <div className="col-12 col-md-8">
            <br />
            <h2 className="titulo">{nombre}</h2>
            <h3 className="titulo">{description}</h3>
            <br />
            <form className="needs-validation" noValidate>
              {fields
                ? fields.map((field, i) => <Element key={i} field={field} />)
                : null}
              <br />
              <p>{terminosCondiciones}</p>

              <button
                type="submit"
                className="btn btn-info btn-totem"
                onClick={(e) => handleSubmit(e)}
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </FormContext.Provider>
  );
};

const mapStateToProps = ({ userReducer }) => {
  return { userReducer };
};

export default connect(mapStateToProps, null)(Formulario);
