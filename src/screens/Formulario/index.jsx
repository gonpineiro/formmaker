import { useState, useEffect } from "react";
import { connect } from "react-redux";

import Element from "../../components/Element";
import { FormContext } from "../FormContext";
import { getForm, className, replaceUrl, postData } from "../../utils";

import "./index.scss";

import JSONForm from "../../otro.json";

// eslint-disable-next-line no-unused-vars
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
const getFormaDataByJson = (setElements, setLoading, idForm) => {
  const json = JSONForm;
  json.fields = json.fields.sort((a, b) => a.field_order - b.field_order);
  setElements(json);
  setLoading(false);
};

const Formulario = ({ userReducer: { idForm } }) => {
  const [elements, setElements] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    replaceUrl("/apps/formulario/");
    if (!idForm) {
      /* Enviamos a un screen 404 */
      setLoading(false);
    } else {
      getFormaDataByJson(setElements, setLoading, idForm);
      //getFormaData(setElements, setLoading, idForm);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { banner, description, fields, terminosCondiciones, nombre } =
    elements ?? {};

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
    });

    if (sendPost) {
      const Formdata = new FormData(event.target.form);
      fields.forEach((req) => {
        Formdata.set(req.field_name, Formdata.get(req.field_name));
      });
      const formObject = {};

      for (const key of Formdata.keys()) {
        formObject[key] = Formdata.get(key);
      }

      postData({ formObject }, "respuesta");

      console.log(formObject);
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
