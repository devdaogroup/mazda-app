import React from 'react';
import DynamicInput from "@/components/extras/DynamicInput";
import {InputProps} from "@/types/FormTypes";

const Form = () => {
    const inputProps:InputProps[] = [
        {
            name: 'field1',
            label: 'Field 1',
            type: 'text',
            regex: /^[A-Za-z0-9]+$/,
            regexErrorMessage: 'Only letters and numbers are allowed',
        },
        {
            name: 'country',
            label: 'Select a Country',
            type: 'dropdown',
            options: [
                {value: 'us', label: 'United States'},
                {value: 'ca', label: 'Canada'},
            ],
        },
        {
            name: 'gender',
            label: 'Select Gender',
            type: 'radio',
            options: [
                {value: 'male', label: 'Male'},
                {value: 'female', label: 'Female'},
            ],
        },
        {
            name: 'fruits',
            label: 'Select Fruits',
            type: 'checkbox',
            options: [
                {value: 'apple', label: 'Apple'},
                {value: 'banana', label: 'Banana'},
                {value: 'orange', label: 'Orange'},
            ],
        },
    ];
    const handleFormSubmit = (data: object) => {
        console.log('Submitted Data:', data);
        // You can perform actions with the data here
    };


    return (
        <div>
            <DynamicInput inputProps={inputProps} onSubmitCallback={handleFormSubmit}/>
        </div>
    );
};

export default Form;