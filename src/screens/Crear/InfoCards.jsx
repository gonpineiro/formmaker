import { InfoField } from "./Components";

import "./index.scss";

const InfoCards = ({ formulario, formulario: { fields }, setFormulario }) => {
  const handlerDeleteField = (element) => {
    fields = fields.filter((item) => item !== element);
    setFormulario({ ...formulario, fields });
  };

  return (
    <>
      {fields.map((element, key) => (
        <InfoField
          key={key}
          element={element}
          handlerDeleteField={() => handlerDeleteField(element)}
        />
      ))}
    </>
  );
};

export default InfoCards;
