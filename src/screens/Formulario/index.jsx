import { useState, useEffect } from "react";
import { connect } from "react-redux";

import { Element, Spinner, Loading } from "../../components";
import { FormContext } from "../FormContext";
import { getFormData } from "./getForms";

import { replaceUrl, postData, createFormData } from "../../utils";

import "./index.scss";
import validateForm from "../../utils/validateForm";
import { useHistory, useParams } from "react-router";

const Formulario = (/* { userReducer: { idForm } } */) => {
  let history = useHistory();
  const [elements, setElements] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [checked, setChecked] = useState(false);
  const [idForm] = useState(useParams().idForm);

  const { hcolor, banner, description, fields, terminosCondiciones, nombre } =
    elements ?? {};
  useEffect(() => {
    replaceUrl("/apps/formmaker/");
    /* if (!idForm) {
      setLoading(false);
    } else { */
    //getFormDataByJson(setElements, setLoading, idForm);
    getFormData(setElements, setLoading, idForm);
  }, [idForm]);

  const handleSubmit = (event) => {
    setLoadingSubmit(true);
    event.preventDefault();
    const fields = elements.fields;
    if (validateForm(fields)) {
      const formObject = createFormData(event.target.form, fields);
      postData({ formObject, idForm }, "respuesta").then(() => {
        setLoadingSubmit(false);
        history.push("/apps/formmaker/");
      });
    } else {
      setLoadingSubmit(false);
    }
  };

  const handleChange = (id, { target: { value } }) => {
    const newElements = { ...elements };
    newElements.fields.forEach((field) => {
      const { field_id } = field;
      if (id === field_id) {
        field["field_value"] = value;
      }
      setElements(newElements);
    });
  };

  if (loading) return <Loading />;

  if (!elements) return "404";
  return (
    <FormContext.Provider value={{ handleChange }}>
      <div className="container pb-5">
        <div className="d-flex justify-content-center">
          <div className="col-12 col-md-7">
            <img className="full_width mb-5" src={banner} alt="" />
            <div className="card rounded-3 mb-3">
              <div
                className="card-header py-3"
                style={{ backgroundColor: hcolor || "#266AAD" }}
              ></div>
              <div className="card-body">
                <h2 className="titulo">{nombre}</h2>
                <p
                  className="titulo"
                  dangerouslySetInnerHTML={{ __html: description }}
                ></p>
              </div>
              <div className="card-footer">
                <p className="text-danger" style={{ margin: "0px" }}>
                  * Obligatorio
                </p>
              </div>
            </div>
            <form id="thisForm" className="needs-validation" noValidate>
              {fields
                ? fields.map((field, i) => {
                    if (field.field_name === "acepto") {
                      return null;
                    }
                    return <Element key={i} field={field} hcolor={hcolor} />;
                  })
                : null}
              {terminosCondiciones ? (
                <div className="card mb-3">
                  <div
                    className="card-header text-light"
                    style={{ backgroundColor: "#42b2df" }}
                  >
                    Términos y Condiciones
                  </div>
                  <div
                    className="card-body overflow-auto"
                    style={{ maxHeight: "200px" }}
                  >
                    <p
                      dangerouslySetInnerHTML={{ __html: terminosCondiciones }}
                    ></p>
                  </div>
                </div>
              ) : null}

              {fields
                ? // eslint-disable-next-line array-callback-return
                  fields.map((field, i) => {
                    if (field.field_name === "acepto") {
                      return (
                        <Element
                          key={i}
                          field={field}
                          setChecked={setChecked}
                          checked={checked}
                        />
                      );
                    }
                  })
                : null}
              {!loadingSubmit ? (
                <div className="d-flex justify-content-between ">
                  <button
                    type="submit"
                    className="btn btn-info btn-totem col"
                    disabled={!checked}
                    onClick={(e) => handleSubmit(e)}
                  >
                    Enviar
                  </button>
                </div>
              ) : (
                <Spinner />
              )}
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
