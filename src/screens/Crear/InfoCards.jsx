import { InfoField } from "./Components";
const InfoCards = ({ formulario: { input }, setFormulario }) => {
  const handlerDeleteField = (element) => {
    setFormulario({ input: input.filter((item) => item !== element) });
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
    </>
  );
};

export default InfoCards;
