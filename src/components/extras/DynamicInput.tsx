import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

type InputType = 'text' | 'dropdown' | 'radio' | 'checkbox';

type InputOption = {
    value: string;
    label: string;
};

type InputProps = {
    name: string;
    label: string;
    type: InputType;
    options?: InputOption[];
    regex?: RegExp;
    regexErrorMessage?: string;
    requiredErrorMessage?: string;
    validation?: yup.StringSchema<string>;
};

type DynamicInputProps = {
    inputProps: InputProps[];
    onSubmitCallback: (data: Record<string, any>) => void;
};


const DynamicInput: React.FC<DynamicInputProps> = ({inputProps, onSubmitCallback}) => {
    const validationSchema = yup.object().shape(
        inputProps.reduce((schema, field) => {
            if (field.validation) {
                schema[field.name] = field.validation;
            } else {
                schema[field.name] = yup
                    .string()
                    .matches(field.regex || /(?:)/, field.regexErrorMessage || 'Invalid input')
                    .required(field.requiredErrorMessage || 'This field is required');
            }
            return schema;
        }, {})
    );

    const {control, handleSubmit, register, formState: {errors}} = useForm<InputProps>({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = (data: Record<string, any>) => {
        onSubmitCallback(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {inputProps.map((input, index) => (
                <div key={index}>
                    <label>{input.label}</label>
                    {input.type === 'dropdown' ? (
                        <Controller
                            name={input.name}
                            control={control}
                            render={({field}) => (
                                <div>
                                    <select {...field}>
                                        {input.options?.map((option, optionIndex) => (
                                            <option key={optionIndex} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}
                        />
                    ) : input.type === 'radio' ? (
                        <div>
                            {input.options?.map((option, optionIndex) => (
                                <div key={optionIndex}>
                                    <input
                                        type="radio"
                                        name={input.name}
                                        value={option.value}
                                        ref={register}
                                    />
                                    <label>{option.label}</label>
                                </div>
                            ))}
                        </div>
                    ) : input.type === 'checkbox' ? (
                        <div>
                            {input.options?.map((option, optionIndex) => (
                                <div key={optionIndex}>
                                    <input
                                        type="checkbox"
                                        name={input.name}
                                        value={option.value}
                                        ref={register}
                                    />
                                    <label>{option.label}</label>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <Controller
                            name={input.name}
                            control={control}
                            render={({field}) => (
                                <div>
                                    <input {...field} />
                                    {errors[field.name] && <p>{errors[field.name].message}</p>}
                                </div>
                            )}
                        />
                    )}
                </div>
            ))}
            <button type="submit">Submit</button>
        </form>
    );
};

export default DynamicInput;
