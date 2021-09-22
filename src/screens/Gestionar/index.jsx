import { useEffect, useState } from "react";
import { getAllForms } from "../../api";

import { BasicCard } from "../../components";
import "./index.scss";

const Gestionar = () => {
  const [formularios, setFormularios] = useState([]);
  useEffect(() => {
    getAllForms().then(({ data: { data } }) => {
      setFormularios(data);
    });
  }, []);

  return (
    <div className="container">
      <h2 className="titulo text-center">Gestionar</h2>
      <div className="row mt-5">
        {formularios.map((form, key) => (
          <BasicCard
            key={key}
            title={form.name}
            description={form.description}
            id={form._id}
          />
        ))}
      </div>
    </div>
  );
};

export default Gestionar;
