import React, { useContext } from 'react';

import { FormContext } from '../../screens/FormContext';
import { asteriscos } from '../../utils';
import { DEFAULT_LABEL_COLOR } from '../../config/config';
import BasicInput from '../BasicInput';

const Radio = ({
    field_id,
    field_name,
    field_label,
    field_required,
    field_options,
    field_other,
    field_other_input,
}) => {
    const { handleChange } = useContext(FormContext);
    const isRequired = field_required === 'true';
    return (
        <>
            <div className="mb-3">
                <div className="card">
                    <div className="card-body">
                        <label
                            className="form-label"
                            id={'id' + field_id}
                            style={{ color: DEFAULT_LABEL_COLOR }}
                        >
                            {field_label}
                            {asteriscos(field_required)}
                        </label>
                        {field_options.length > 0 &&
                            field_options.map((option, i) => (
                                <div key={i} className="form-check">
                                    <input
                                        required={isRequired && 'required'}
                                        className="form-check-input"
                                        type="radio"
                                        onChange={(event) => handleChange(field_id, event)}
                                        id={'id' + option.option_label + field_id}
                                        name={field_name}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor={'id' + option.option_label + field_id}
                                    >
                                        {option.option_label}
                                    </label>
                                </div>
                            ))}
                        {field_other && field_other_input && (
                            <BasicInput
                                label={field_other_input.field_label}
                                type="text"
                                value=""
                                id={field_other_input.field_id}
                                placeholder={field_other_input.field_label}
                                onChange={(event) =>
                                    handleChange(field_other_input.field_id, event)
                                }
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Radio;
