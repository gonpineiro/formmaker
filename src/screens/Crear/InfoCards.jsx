import { InfoField } from "./Components";
const InfoCards = ({ formulario: { fields }, setFormulario }) => {
  const handlerDeleteField = (element) => {
    fields = fields.filter((item) => item !== element);
    setFormulario({ fields });
  };

  return (
    <>
      <h4 className="mb-3">Campos Formulario</h4>
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
