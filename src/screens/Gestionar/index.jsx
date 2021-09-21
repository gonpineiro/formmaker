import { useState } from "react";
import "./index.scss";

import {
  deleteFormById,
  getAllForms,
  getFormById,
  insertForm,
  updateFormById,
} from "../../api";

const Gestionar = () => {
  const [formularios, setFormularios] = useState(null);
  getAllForms().then(({ data: { data } }) => {
  });
  return (
    <div className="container">
      <h2 className="titulo text-center">Gestionar</h2>
      <div className="row mt-5">
        <div className="col flex-row text-center"></div>
      </div>
    </div>
  );
};

export default Gestionar;
