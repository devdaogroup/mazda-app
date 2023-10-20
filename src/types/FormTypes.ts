import * as yup from "yup";

type InputType = 'text' | 'dropdown' | 'radio' | 'checkbox';

type InputOption = {
    value: string;
    label: string;
};

export type InputProps = {
    name: string;
    label: string;
    type: InputType;
    options?: InputOption[];
    regex?: RegExp;
    regexErrorMessage?: string;
    requiredErrorMessage?: string;
    validation?: yup.StringSchema<string>;
};

export type DynamicInputProps = {
    inputProps: InputProps[];
    onSubmitCallback: (data: Record<string, any>) => void;
};
