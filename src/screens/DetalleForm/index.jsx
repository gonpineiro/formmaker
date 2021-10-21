import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactTooltip from "react-tooltip";

import { getFormById } from "../../api";
import { Loading } from "../../components";

const DetalleForm = () => {
  const [form, setForm] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getFormById(id).then(({ data: { data } }) => {
      setForm(data);
    });
  }, [id]);

  if (!form) return <Loading />;

  return (
    <div className="container pt-5">
      <h2 className="titulo text-center">{form.name}</h2>
      <div className="row mt-5">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Etiqueta</th>
              <th scope="col">Descripción</th>
              <th scope="col">Titulo</th>
              <th scope="col">Tipo</th>
              <th scope="col">Requerido</th>
              <th scope="col">Min</th>
              <th scope="col">Max</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {form.fields.map((field, key) => (
              <tr key={key}>
                <td>{field.field_label || "-"}</td>
                <td>{field.separator_description || "-"}</td>
                <td>{field.separator_title || "-"}</td>
                <td>{field.field_type || "-"}</td>
                <td>{field.field_required === true ? "Si" : "No" || "-"}</td>
                <td>{field.min_lenght || "-"}</td>
                <td>{field.max_lenght || "-"}</td>
                {field.field_options ? (
                  <td
                    data-for="main"
                    className="text-center"
                    data-tip={field.field_options.join()}
                  >
                    {"O"}
                    <ReactTooltip
                      id="main"
                      multiline
                      effect="solid"
                      type="info"
                    />
                  </td>
                ) : (
                  <td>{"-"}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetalleForm;
