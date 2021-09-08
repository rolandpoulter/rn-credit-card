import React from 'react';
import { TextInput } from 'react-native';
declare const TextField: React.ForwardRefExoticComponent<import("react-native").TextInputProps & {
    label: string;
    errorText?: string | null;
    endEnhancer?: React.ReactNode;
} & React.RefAttributes<TextInput>>;
export default TextField;
