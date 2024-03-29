import { useState } from 'react';

import { BasicInput, BasicTextarea, BasicCheckbox, BasicButton } from '../../../components';

import { getOrderId } from '../../../utils';

const initialState = { field_required: true, field_other: false, field_type: 'radio' };

const FieldRadio = ({ formulario, setFormulario, callapseOrden }) => {
    const [field, setField] = useState(initialState);
    const [disabledSubmit, setDisabledSubmit] = useState(true);

    const formatField = () => {
      let radioField = field;

        if (field.field_other) {
            radioField.field_options += ';otro';
            radioField.field_other_input = {
                field_label: 'Otro',
                field_name: 'otro',
                field_id: 'value_' + field.field_id,
                field_value: '',
            };
        }

        let options = radioField.field_options.split(';');

        options = options.filter((item) => item !== '');

        let field_options = [];

        let id = 1;
        options.forEach((option) =>
            field_options.push({
                id,
                option_label: option,
            })
        );
        id++;

        return {
            ...radioField,
            field_options,
        };
    };

    const enableSubmit = (value) => {
        let opciones = value.split(';');
        opciones = opciones.filter((item) => item !== '');

        if (opciones.length === 0) {
            setDisabledSubmit(true);
        } else {
            setDisabledSubmit(false);
        }
    };

    const handlerSubmit = () => {
        const fields = formulario.fields;
        field.field_order = getOrderId(fields);

        fields.push(formatField());

        setFormulario({
            ...formulario,
        });

        setField(initialState);
        setDisabledSubmit(true);
    };

    const handlerTextChange = ({ target: { value } }) => {
        setField({
            ...field,
            field_label: value,
            field_placeholder: value,
            field_name: value,
            field_id: value,
            field_value: '',
        });
    };

    const handlerOptionChange = ({ target: { value } }) => {
        enableSubmit(value);
        setField({
            ...field,
            field_options: value,
        });
    };

    const handlerRequiredChange = () => {
        setField({
            ...field,
            field_required: !field.field_required,
        });
    };

    const handlerOtherFieldChange = () => {
        setField({
            ...field,
            field_other: !field.field_other,
        });
    };

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={'heading' + callapseOrden}>
                <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={'#collapse' + callapseOrden}
                    aria-expanded="false"
                    aria-controls={'collapse' + callapseOrden}
                >
                    Selección Única
                </button>
            </h2>
            <div
                id={'collapse' + callapseOrden}
                className="accordion-collapse collapse"
                aria-labelledby={'heading' + callapseOrden}
                data-bs-parent="#accordionFieldType"
            >
                <div className="accordion-body">
                    <BasicInput
                        label="Etiqueta"
                        id={'radio_field_label'}
                        type="text"
                        value={field.field_label || ''}
                        handlerChange={handlerTextChange}
                        placeholder="Ej: Nombre mascota, escriba su email, descripción de su vivienda"
                    />
                    <BasicTextarea
                        label="Escriba las opciones separadas por ;"
                        type="text"
                        id="radio_field_options"
                        rows="3"
                        value={field.field_options || ''}
                        handlerChange={handlerOptionChange}
                        placeholder="Ej: casa; departamento; casa rodante;"
                    />
                    <div className="row">
                        <div className="col">
                            <BasicCheckbox
                                label="¿Es un campo requerido?"
                                checked={field.field_required}
                                handlerChange={handlerRequiredChange}
                                id="radio_field_required"
                            />
                        </div>
                        <div className="col">
                            <BasicCheckbox
                                label="¿Agregar campo 'Otro'?"
                                checked={field.field_other}
                                handlerChange={handlerOtherFieldChange}
                                id="radio_field_other"
                            />
                        </div>
                    </div>

                    <BasicButton
                        label="Agregar campo"
                        handlerClick={handlerSubmit}
                        classname="btn btn-primary mb-3"
                        disabled={disabledSubmit}
                    />
                </div>
            </div>
        </div>
    );
};

export default FieldRadio;
