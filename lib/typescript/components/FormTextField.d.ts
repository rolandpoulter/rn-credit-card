import React from 'react';
import { RegisterOptions } from 'react-hook-form';
import { TextInput } from 'react-native';
import TextField from './TextField';
declare type Props = React.ComponentProps<typeof TextField> & {
    name: string;
    rules: RegisterOptions;
    validationLength?: number;
    formatter?: (oldValue: string, newValue: string) => string;
    onValid?: () => void;
};
declare const FormTextField: React.ForwardRefExoticComponent<Pick<Props, "label" | keyof import("react-native").TextInputProps | "errorText" | "endEnhancer" | "name" | "key" | "rules" | "validationLength" | "formatter" | "onValid"> & React.RefAttributes<TextInput>>;
export default FormTextField;
