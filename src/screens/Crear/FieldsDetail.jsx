import {
  FieldCheckbox,
  FieldLink,
  FieldNumber,
  FieldRadio,
  FieldSelect,
  FieldSeparator,
  FieldText,
} from "./Components";

const FieldsDetail = ({ formulario, setFormulario }) => (
  <div className="col-12 col-md-6">
    <h4 className="mb-3">Elegir Campos</h4>
    <div className="accordion" id="accordionFieldType">
      <FieldSeparator
        formulario={formulario}
        setFormulario={setFormulario}
        callapseOrden={"FieldSeparator"}
      />
      <FieldLink
        formulario={formulario}
        setFormulario={setFormulario}
        callapseOrden={"FieldLink"}
      />
      <FieldText
        formulario={formulario}
        setFormulario={setFormulario}
        callapseOrden={"FieldText"}
      />
      <FieldNumber
        formulario={formulario}
        setFormulario={setFormulario}
        callapseOrden={"FieldNumber"}
      />
      <FieldSelect
        formulario={formulario}
        setFormulario={setFormulario}
        callapseOrden={"FieldSelect"}
      />
      <FieldRadio
        formulario={formulario}
        setFormulario={setFormulario}
        callapseOrden={"FieldRadio"}
      />
      <FieldCheckbox
        formulario={formulario}
        setFormulario={setFormulario}
        callapseOrden={"FieldCheckbox"}
      />
    </div>
  </div>
);

export default FieldsDetail;
