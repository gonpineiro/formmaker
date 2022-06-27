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
        field_name,
        field_options,
        field_other,
        field_other_input,
        field_placeholder,
        field_required,
        field_type,
        field_value,
        link_title,
        separator_title,
        separator_description,
        url,
        image_title,
        image_src,
    },
    hcolor,
    checked,
    setChecked,
}) => {
    console.log(field_other_input);
    switch (field_type) {
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
        default:
            return null;
    }
};

export default Element;
