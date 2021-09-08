import React from 'react';
import { TouchableOpacity } from 'react-native';
declare type Props = React.ComponentProps<typeof TouchableOpacity> & {
    title: string;
    disabled: boolean | null;
};
declare const Button: React.FC<Props>;
export default Button;
