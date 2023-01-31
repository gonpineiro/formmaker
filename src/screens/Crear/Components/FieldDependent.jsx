import { useState } from "react";
import { BasicCheckbox } from "../../../components";
import AlertMessage from "../../../components/Alert";
import GenericSelect from "../../../components/inputs/GenericSelect";

const FieldDependant = ({ formulario, setField, field, id_dependant, puedeAgregarOpcion }) => {
    // const [field, setField] = useState(initialState);

    // console.log(field);
    const [fieldsToDepend, setFieldsToDepend] = useState([]);
    const [optionsToDepend, setOptionsToDepend] = useState([]);
    // const [disabledSubmit, setDisabledSubmit] = useState(true);

    const handlerDependantChange = () => {
        let arrayDependantOptionsObjects = formulario.fields.filter(aField => {
            // return ['select', 'selectSearch', 'checkboxes', 'radio'].includes(aField.field_type);
            return ['select', 'selectSearch', 'radio'].includes(aField.field_type);
        });

        if (arrayDependantOptionsObjects.length > 0 && !field.field_dependant) {
            let fieldsSelectArray = [];
            // console.log(arrayDependantOptionsObjects);
            arrayDependantOptionsObjects.map(element => {
                fieldsSelectArray.push({ field_placeholder: element.field_id, option_label: element.field_id });
            });
            if (fieldsSelectArray.length > 0) {
                setFieldsToDepend(fieldsSelectArray)
            } else {
                setFieldsToDepend([]);
                setOptionsToDepend([]);
            }
            // fieldsSelectArray.length > 0 ? setFieldsToDepend(fieldsSelectArray) : (setFieldsToDepend([]) setOptionsToDepend([]));
        } else {
            setFieldsToDepend([])
            setOptionsToDepend([])
            // setOptionsToDepend([])
        }

        setField({
            ...field,
            field_dependant: !field.field_dependant,
        });
        puedeAgregarOpcion();
    };

    const handlerDependsOnFieldChange = ({ target: { value } }) => {
        let optionsForThisValue = formulario.fields.filter(aField => {
            return aField.field_id == value;
        });
        // console.log(target);
        // console.log("field");
        // console.log(formulario);
        // console.log(value)
        if (optionsForThisValue.length > 0) {
            let optionsSelectArray = [];
            // console.log(optionsForThisValue);
            optionsForThisValue[0].field_options.map(anOption => {
                optionsSelectArray.push({ field_placeholder: anOption.option_label, option_label: anOption.option_label });
            });
            // console.log(optionsSelectArray);

            optionsSelectArray.length > 0 ? setOptionsToDepend(optionsSelectArray) : setOptionsToDepend([]);
        } else {
            setOptionsToDepend([]);
        }
        setField({
            ...field,
            field_dependsOnField: value,
        });
        puedeAgregarOpcion();
    };

    const handlerDependsOnOptionChange = ({ target: { value } }) => {
        // console.log(target);
        // console.log(value);
        // console.log("option");
        // console.log(formulario);
        // console.log(value)
        // if(value){
        //     let arrayDependantOptionsObjects = formulario.fields.filter(aField => {
        //         return ['select', 'selectSearch', 'checkboxes', 'radio'].includes(aField.field_type);
        //     });
        // }
        setField({
            ...field,
            field_optionExpected: value,
        });
        // console.log(field.field_optionExpected);
        puedeAgregarOpcion();
    };

    // console.log(field);
    // return null;
    return (
        <>
            <div className="col-12">
                <BasicCheckbox
                    label="¿Aparece en base a la respuesta de otro campo?"
                    checked={field.field_dependant}
                    handlerChange={handlerDependantChange}
                    id={"checkbox-"+id_dependant}
                />
            </div>
            {
                field.field_dependant ?
                    <div className="col">
                        {
                            (fieldsToDepend.length > 0) ?
                                <GenericSelect
                                    field_options={fieldsToDepend}
                                    field_label="Seleccione el campo del cual depende:"
                                    field_id={id_dependant}
                                    field_name={id_dependant}
                                    field_required={true}
                                    handleFunction={handlerDependsOnFieldChange}
                                    on
                                />
                                : <AlertMessage className="p-0 m-0" message={"No hay campos con opciones"}></AlertMessage>
                        }
                        {
                            (optionsToDepend.length > 0) ?
                                <GenericSelect
                                    field_options={optionsToDepend}
                                    field_label="Seleccione la opcion de la cual depende:"
                                    field_id={"dependant_option_id" + field.field_id}
                                    field_name={"dependant_option_id" + field.field_id}
                                    field_required={true}
                                    handleFunction={handlerDependsOnOptionChange}
                                    on
                                />
                                : 
                                (fieldsToDepend.length > 0 ? <AlertMessage className="p-0 m-0" message={"No seleccionó un campo"}></AlertMessage> : '')
                        }
                    </div> : ''
            }
        </>
    );
};

export default FieldDependant;
