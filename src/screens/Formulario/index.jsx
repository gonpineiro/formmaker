import "./index.scss";
import { useState, useEffect } from "react";
import Element from "../../components/Element";
import { FormContext } from "../FormContext";
import { getForm, className } from "../../utils";

const Formulario = () => {
  const [elements, setElements] = useState(null);
  const [loading, setLoading] = useState(true);

  const getFormaData = async () => {
    const formData = await getForm(1);
    const json = JSON.parse(formData.string);
    json.fields = json.fields.sort((a, b) => a.field_order - b.field_order);
    setElements(json);
    setLoading(false);
  };

  useEffect(() => {
    getFormaData();
  }, []);

  const { banner, description, fields, terminosCondiciones, nombre } =
    elements ?? {};

  const handleSubmit = (event) => {
    event.preventDefault();
    const fields = elements.fields;
    let sendPost = true;

    fields.forEach((req) => {
      if (req.field_value === "" && req.field_required === "required") {
        className("id" + req.field_id, "is-invalid", "add");
        sendPost = false;
      } else {
        className("id" + req.field_id, "is-invalid", "remove");
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
    //console.log(elements);
  };

  if (loading) return "Loading";

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
