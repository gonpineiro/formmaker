import { useEffect, useState } from "react";
import { getAllForms } from "../../utils";

import { BasicTable } from "../../components";

const getFormsJson = async (setForms) => {
  let forms = await getAllForms();
  forms = Object.values(forms);
  forms = forms.filter((item) => item !== null);

  forms.forEach((form) => {
    delete form.id;
  });

  setForms(Object.values(forms));
};

const Gestionar = () => {
  const [formularios, setFormularios] = useState([]);

  useEffect(() => {
    getFormsJson(setFormularios);
  }, []);

  return (
    <div className="container pt-5">
      <h2 className="titulo text-center">Gestionar</h2>
      <div className="row mt-5">
        <BasicTable data={formularios} />
      </div>
    </div>
  );
};

export default Gestionar;
