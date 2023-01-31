import React from 'react';
import AnswerDate from './inputs/AnswerDate';
import Checkbox from './inputs/Checkbox';
import Checkboxes from './inputs/Checkboxes';
import Date from './inputs/Date';
import Input from './inputs/Input';
import Link from './inputs/Link';
import Image from './inputs/Image';
import Radio from './inputs/Radio';
import Select from './inputs/Select';
import SelectSearch from './inputs/SelectSearch';
import Separator from './inputs/Separator';
import TextArea from './inputs/TextArea';

const Element = ({
    field: {
        field_class,
        field_id,
        field_label,
        field_max,
        field_min,
        field_maxValue,
        field_minValue,
        field_name,
        field_options,
        field_other,
        field_other_input,
        field_placeholder,
        field_required,
        field_type,
        field_value,
        field_accept,
        link_title,
        separator_title,
        separator_description,
        url,
        image_title,
        image_src,

        field_dependant,
        field_dependsOnField,
        field_optionExpected,
        field_visibility
    },
    hcolor,
    checked,
    setChecked,
    formElements,
}) => {
    //console.log("que llego? "+ JSON.stringify(field_required));
    //console.log("hola: "+ field_accept);
    //console.log(field_other_input);
    // console.log(formElements);

    let field_type_if_can_show = null;
    if (["true", true].includes(field_dependant) && (field_dependsOnField != "-1" || field_dependsOnField != -1)) {
        // console.log("entre");
        // console.log(field_value);
        // console.log(formElements);
        // console.log(field_name);
        // console.log(field_id);
        // console.log(field_label);
        let filteredField = formElements.fields.filter((field) => {
            return (field.field_id == field_dependsOnField);
        });

        // console.log(filteredField);
        // console.log(filteredField.length == 1);

        if (filteredField.length == 1) {
            // console.log("");
            // if(field_optionExpected == "dsu1"){
            //     console.log("opcion esperada");
            //     console.log(field_optionExpected);
            //     console.log(filteredField[0].field_value);
            //     console.log(filteredField[0].field_visibility);
            // }
            // console.log("");

            if (filteredField[0].field_value == field_optionExpected) {
                // console.log("Lo consegui!");
                // console.log(filteredField[0].field_visibility);
                if ([undefined, null, '', true, 'true'].includes(filteredField[0].field_visibility)) {
                    field_type_if_can_show = field_type;
                    field_required = true;
                    field_visibility = true;
                } else {
                    field_required = false;
                    field_visibility = false;
                }
            } else {
                field_required = false;
                field_visibility = false;
            }
        }
    } else {
        field_type_if_can_show = field_type;
    }

    // if([false].includes(field_visibility)){
    //     field_type_if_can_show = null;
    // }


    // console.log(field_dependant);
    switch (field_type_if_can_show) {
        case 'answerdate':
            return (
                <AnswerDate
                    field_id={field_id}
                    field_name={field_name}
                    field_required={field_required}
                    field_type={field_type}
                />
            );
        case 'text':
            return (
                <Input
                    field_id={field_id}
                    field_name={field_name}
                    field_label={field_label}
                    field_placeholder={field_placeholder}
                    field_value={field_value}
                    field_required={field_required}
                    field_class={field_class}
                    field_min={field_min}
                    field_max={field_max}
                    field_type={field_type}
                />
            );
        case 'number':
            return (
                <Input
                    field_id={field_id}
                    field_name={field_name}
                    field_label={field_label}
                    field_placeholder={field_placeholder}
                    field_value={field_value}
                    field_required={field_required}
                    field_class={field_class}
                    field_min={field_min}
                    field_max={field_max}
                    field_minValue={field_minValue}
                    field_maxValue={field_maxValue}
                    field_type={field_type}
                />
            );
        case 'email':
            return (
                <Input
                    field_id={field_id}
                    field_name={field_name}
                    field_label={field_label}
                    field_placeholder={field_placeholder}
                    field_value={field_value}
                    field_required={field_required}
                    field_class={field_class}
                    field_min={field_min}
                    field_max={field_max}
                    field_type={field_type}
                />
            );
        case 'textarea':
            return (
                <TextArea
                    field_id={field_id}
                    field_name={field_name}
                    field_label={field_label}
                    field_placeholder={field_placeholder}
                    field_value={field_value}
                    field_required={field_required}
                    field_max={field_max}
                />
            );
        case 'image':
            return (
                <Image
                    field_id={field_id}
                    image_title={image_title}
                    image_src={image_src}
                    hcolor={hcolor}
                />
            );
        case 'link':
            return <Link link_title={link_title} url={url} hcolor={hcolor} />;
        case 'radio':
            return (
                <Radio
                    field_id={field_id}
                    field_name={field_name}
                    field_label={field_label}
                    field_placeholder={field_placeholder}
                    field_value={field_value}
                    field_options={field_options}
                    field_required={field_required}
                    field_other={field_other}
                    field_other_input={field_other_input}
                />
            );
        case 'select':
            return (
                <Select
                    field_id={field_id}
                    field_name={field_name}
                    field_label={field_label}
                    field_placeholder={field_placeholder}
                    field_value={field_value}
                    field_options={field_options}
                    field_required={field_required}
                />
            );
        case 'selectSearch':
            return (
                <SelectSearch
                    field_id={field_id}
                    field_name={field_name}
                    field_label={field_label}
                    field_placeholder={field_placeholder}
                    field_value={field_value}
                    field_options={field_options}
                    field_required={field_required}
                />
            );
        case 'separator':
            return (
                <Separator
                    separator_title={separator_title}
                    separator_description={separator_description}
                    hcolor={hcolor}
                />
            );
        case 'checkbox':
            return (
                <Checkbox
                    field_id={field_id}
                    field_name={field_name}
                    field_label={field_label}
                    field_placeholder={field_placeholder}
                    field_value={field_value}
                    field_options={field_options}
                    field_required={field_required}
                    setChecked={setChecked}
                    checked={checked}
                />
            );
        case 'checkboxes':
            return (
                <Checkboxes
                    field_id={field_id}
                    field_name={field_name}
                    field_label={field_label}
                    field_placeholder={field_placeholder}
                    field_value={field_value}
                    field_options={field_options}
                    field_required={field_required}
                />
            );
        case 'date':
            return (
                <Date
                    field_id={field_id}
                    field_name={field_name}
                    field_label={field_label}
                    field_placeholder={field_placeholder}
                    field_required={field_required}
                    field_value={field_value}
                />
            );
        case 'file':
            return (
                <Input
                    field_id={field_id}
                    field_type={field_type}
                    field_name={field_name}
                    field_label={field_label}
                    field_placeholder={field_placeholder}
                    field_required={field_required}
                    field_value={field_value}
                    field_accept={field_accept}
                />
            );
        default:
            return null;
    }
};

export default Element;
