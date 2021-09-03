import { FieldText, FieldNumber, FieldSelect } from "./Components";

const TabForm = () => {
  return (
    <>
      <h4 className="mb-3">Elegir Campos</h4>
      <div className="accordion" id="accordionFieldType">
        <FieldText />
        <FieldNumber />
        <FieldSelect />
      </div>
    </>
  );
};

export default TabForm;
