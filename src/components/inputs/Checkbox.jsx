// import { useContext } from "react";
// import { FormContext } from "../../screens/FormContext";
import { asteriscos } from "../../utils";

const Checkbox = ({
  field_id,
  field_label,
  field_required,
  checked,
  setChecked,
}) => {
  // const { handleChange } = useContext(FormContext);


  // const hanldeChecked = (id, event) => {
  const hanldeChecked = () => {
    setChecked(!checked);
    // handleChange(id,event)
  };


  const isRequired = field_required === "true";
  return (
    <>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id={field_id}
          checked={checked}
          onChange={hanldeChecked}
          // onChange={(event) => hanldeChecked(field_id, event)}
          required={isRequired && "required"}
        />
        <label className="form-check-label" htmlFor={field_id}>
          {field_label}
          {asteriscos(field_required)}
        </label>
      </div>
    </>
  );
};

export default Checkbox;
