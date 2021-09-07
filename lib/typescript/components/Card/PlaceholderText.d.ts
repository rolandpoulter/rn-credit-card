import React from 'react';
import { LayoutChangeEvent, ViewStyle } from 'react-native';
declare type Style = ViewStyle | undefined;
declare type Props = {
    value: string;
    placeholder: string;
    onLayout?: (event: LayoutChangeEvent) => void;
    style?: Style[] | ViewStyle;
};
declare const PlaceholderText: React.FC<Props>;
export default PlaceholderText;
