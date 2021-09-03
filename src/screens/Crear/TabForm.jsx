import { FieldText, FieldNumber, FielSelect } from "./Components";

const TabForm = () => {
  return (
    <>
      <h4 className="mb-3">Elegir Campos</h4>
      <div className="accordion" id="accordionFieldType">
        <FieldText />
        <FieldNumber />
        <FielSelect />
      </div>
    </>
  );
};

export default TabForm;
