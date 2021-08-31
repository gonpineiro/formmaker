import "./index.scss";
import formJSON from "../../formElement.json";
import { useState, useEffect } from "react";
import Element from "../../components/Element";
import { FormContext } from "../FormContext";

const Formulario = () => {
  const [elements, setElements] = useState(null);

  useEffect(() => {
    formJSON[0].fields = formJSON[0].fields.sort(
      (a, b) => a.field_order - b.field_order
    );
    setElements(formJSON[0]);
  }, [elements]);

  const { banner, description, fields, terminosCondiciones, nombre } =
    elements ?? {};

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(elements);
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
    console.log(elements);
  };

  return (
    <FormContext.Provider value={{ handleChange }}>
      <div className="App container">
        <img className="img-fluid" src={banner} alt="" />
        <div className="d-flex justify-content-center">
          <div className="col-12 col-md-8">
            <br />
            <h2 className="titulo">{nombre}</h2>
            <h3 className="titulo">{description}</h3>
            <br />
            <form>
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

export default Formulario;
