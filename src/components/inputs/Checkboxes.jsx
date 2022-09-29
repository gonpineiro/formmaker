import { asteriscos } from "../../utils";
import { DEFAULT_LABEL_COLOR } from "../../config/config";

const Checkboxes = ({
  field_id,
  field_label,
  field_required,
  field_options,
  field_name,
}) => {
  return (
    <div className="mb-3">
      <div className="card">
        <div className="card-body">
          <label
            className="form-check-label mb-3"
            htmlFor={field_id}
            id={"id" + field_id}
            style={{ color: DEFAULT_LABEL_COLOR }}
          >
            {field_label}
            {asteriscos(field_required)}
          </label>
          <div className="container row">
            {field_options.map((option, i) => (
              <div className="form-check col-12" key={i}>
                <input
                  type="checkbox"
                  className="form-check-input"
                  name={field_name}
                  value={option.option_label}
                  id={"id" + option.option_label}
                />
                <label
                  className="form-check-label"
                  htmlFor={"id" + option.option_label}
                >
                  {option.option_label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkboxes;
