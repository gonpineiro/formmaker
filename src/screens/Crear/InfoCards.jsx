import { useState } from "react";
import { InfoField } from "./Components";

import "./index.scss";

const InfoCards = ({ formulario: { input }, setFormulario }) => {
  const [color, setColor] = useState("#266AAD");

  const handlerDeleteField = (element) => {
    input = input.filter((item) => item !== element);
    setFormulario({ input });
  };

  const handlerColorChange = ({ target: { value } }) => {
    setColor(value);
  };

  return (
    <>
      <h4 className="mb-3">Campos Formulario</h4>
      {input.map((element, key) => (
        <InfoField
          key={key}
          element={element}
          handlerDeleteField={() => handlerDeleteField(element)}
        />
      ))}
      <label htmlFor="colorPicker" className="form-label">
        Color del formulario
      </label>
      <input
        id="colorPicker"
        type="color"
        name="favcolor"
        value={color}
        onChange={handlerColorChange}
      />
    </>
  );
};

export default InfoCards;
