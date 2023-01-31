import { BasicButton, Element } from "../../components";
import { FormContext } from "../FormContext";

import { renameTab } from "../../utils";
import { useState } from "react";

const Preview = ({ formulario, setPreview, buttonMessage }) => {
  const [elements, setElements] = useState(formulario);
  const { hcolor, banner, description, fields, terminosCondiciones, nombre } =
    formulario ?? {};

  // console.log(formulario);

  const hanlderReturnToForm = () => {
    limpiarForm();
    setPreview(false);
  };

  const limpiarForm = () => {
    const newElements = { ...elements };
    newElements.fields.forEach((field) => {
      field["field_value"] = "";
      setElements(newElements);
    });
  };

  // const handleChange = (id, element) => {
  const handleChange = (id, { target: { value } }) => {
    // console.log(value);
    const newElements = { ...elements };
    let field_id;
    newElements.fields.forEach((field) => {
      // const { field_id } = field;
      if (id === field.field_id) {
        field_id = field.field_id
        // field["field_value"] = element.target.nextElementSibling.textContent;
        field["field_value"] = value;
      }
      setElements(newElements);
    });

    newElements.fields.forEach((field) => {
      // const { field_id } = field;
      // console.log("Dependiente");
      // console.log(field_id);
      // console.log(field.field_dependsOnField);
      // console.log("");
      if (field_id === field.field_dependsOnField) {
        // field["field_value"] = element.target.nextElementSibling.textContent;
        field["field_value"] = null;
      }
      setElements(newElements);
    });


  };

  renameTab("Previsualización de Formulario");

  return (
    <FormContext.Provider value={{ handleChange }}>
      <div className="container pt-5 pb-5">
        <div className="d-flex justify-content-center">
          <div className="col-12 col-md-7">
            <BasicButton
              label={buttonMessage ? buttonMessage : "Volver al modo creación"}
              handlerClick={hanlderReturnToForm}
              classname="btn btn-primary mb-3"
            />
            <img className="full_width mb-5 rounded-3" src={banner} alt="" />
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
            {fields
              ? fields.map((field, i) => {
                if (field.field_name === "acepto") {
                  return null;
                }
                return (<Element key={i} field={field} hcolor={hcolor} formElements={formulario} />);
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
                  return <Element key={i} field={field} />;
                }
              })
              : null}
          </div>
        </div>
      </div>
    </FormContext.Provider>
  );
};

export default Preview;
